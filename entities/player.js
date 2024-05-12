export class Player
{
    constructor(posX, 
        posY, speed, jumpForce, 
        nbLives, currentLevelScene, 
        isInTerminalScene) //Can use vec2 as position intead of individual positions
    {
        this.isInTerminalScene = isInTerminalScene
        this.currentLevelScene = currentLevelScene
        this.initialX = posX    //Useful for respawning
        this.initialY = posY    //Useful for respawning
        this.makePlayer(0, 3)
        this.speed = speed
        this.jumpForce = jumpForce
        this.lives = nbLives
        this.previousHeight = this.gameObj.pos.y
    }

    makePlayer(x, y)
    {
        this.gameObj = add([
            sprite("player", {anime: "idle"}),
            area({ shape: new Rect(vec2(0,3), 8,8)}),
            anchor("center"),
            pos(x, y),
            scale(4),
            body(),
            "player",
        ])
    }
}
