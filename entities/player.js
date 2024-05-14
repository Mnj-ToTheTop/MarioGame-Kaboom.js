
export class Player
{
    heightDelta = 0
    isRespawning = false
    isMoving = false
    coyoteLapse = 0.1
    coins = 0

    constructor(posX, 
        posY, speed, jumpForce, 
        nbLives, currentLevelScene, 
        inInFinalLevel) //Can use vec2 as position intead of individual positions
    {
        this.inInFinalLevel = inInFinalLevel
        this.currentLevelScene = currentLevelScene
        this.initialX = posX    //Useful for respawning
        this.initialY = posY    //Useful for respawning
        this.makePlayer(posX, posY)
        this.setPlayerControls()
        this.speed = speed
        this.jumpForce = jumpForce
        this.lives = nbLives
        this.previousHeight = this.gameObj.pos.y
    }

    makePlayer(x, y)
    {
        this.gameObj = add([
            sprite("player", {anim: "idle"}),
            area({ shape: new Rect(vec2(0,3), 8,8)}),
            anchor("center"),
            pos(x,y),
            scale(4),
            body(),
            "player",
        ])
    }

    enablePassthrough(){
        this.gameObj.onBeforePhysicsResolve((collison) => {
            if(collison.target.is("passthrough") && this.gameObj.isJumping())
            {
                collison.preventResolution()
            }

            if(collison.target.is("passthrough") && isKeyDown("down"))
            {
                collison.preventResolution()
            }
        })


    }

    enableCoinPickUp()
    {
        this.gameObj.onCollide("coin", (coin_collected) => {
            this.coins++
            destroy(coin_collected)
            play("coin")
        })
    }

    setPlayerControls()
    {
        onKeyDown("left", () => {
            if (this.gameObj.curAnim() !== "run")
                this.gameObj.play("run")
            this.gameObj.flipX = true
            if(!this.isRespawning) this.gameObj.move(-this.speed, 0)
            this.isMoving = true
        })

        onKeyDown("right", () => {
            if (this.gameObj.curAnim() !== "run")
                this.gameObj.play("run")
            this.gameObj.flipX = false
            if(!this.isRespawning) this.gameObj.move(this.speed, 0)
            this.isMoving = true
        })

        onKeyDown("space", () => {

            if(!this.gameObj.isGrounded() && this.hasJumpedOnce) return

            if(time() - this.timeSinceLastGrounded > this.coyoteLapse) return

            this.gameObj.jump(this.jumpForce)
            play("jump-sound")
            this.hasJumpedOnce = true

        })

        onKeyRelease(() => {
            if(isKeyReleased("right")||isKeyReleased("left"))
            {
                this.gameObj.play("idle")
                this.isMoving = false
            }
        })
    }

    respawnPlayer() 
        {
            if (this.lives > 1)
            {
                this.lives--
                this.gameObj.pos = vec2(this.initialX, this.initialY)
                this.isRespawning = true
                setTimeout(()=> this.isRespawning = false, 500)
                return
            }

            go("gameOver")
        }
        

    update()
    {
        onUpdate(() => {

            if(this.gameObj.isGrounded())
            {
                this.hasJumpedOnce = false
                this.timeSinceLastGrounded = time()
            }
            this.heightDelta = this.previousHeight - this.gameObj.pos.y
            this.previousHeight = this.gameObj.pos.y
            
            if (!this.isMoving && 
                this.gameObj.curAnim() !== "idle")
            {
                this.gameObj.play("idle")
            }
            
            if(this.gameObj.pos.y > 800)
            {
                play("hit", { speed: 1.5})
                this.respawnPlayer()
            }
            
            if(!this.gameObj.isGrounded() &&
                this.heightDelta > 0 &&
                this.gameObj.curAnim() !== "jump-up")   // Jumping up
            {
                this.gameObj.play("jump-up")
            }

            if(!this.gameObj.isGrounded() &&
                this.heightDelta < 0 &&
                this.gameObj.curAnim() !== "jump-down")   // Jumping up
            {
                this.gameObj.play("jump-down")
            }

            
        })
    }

    updateLivesCount(livesCountUI)
    {
        onUpdate( () => {
            livesCountUI.text = this.lives
        })
    }
    updateCoinCount(coinCountUI)
    {
        onUpdate( () => {
            coinCountUI.text = `${this.coins} / ${coinCountUI.fullCoinCount}`
            if(this.coins === coinCountUI.fullCoinCount)
            {
                go(this.inInFinalLevel ? "endScreen" : this.currentLevelScene + 1)
            }
        })
    }
    
}