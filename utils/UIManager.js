class UIManager {
    
    displayLivesCount(player)
    {
        this.livesCountUI = add([
            text("", { font: "Round", size: 50}),
            fixed(),
            pos(70,10)
        ])

        this.livesCountUI.add([
            sprite("star-red"),
            pos(-60, -5),
            scale(3),
            fixed()
        ])

    }

    displayCoinCount(player)
    {
        this.coinCountUI = add([
            text("", { font: "Round", size: 50}),
            {fullCoinCount: get("coin", { recursive: true }).length},
            fixed(),
            pos(70,70)
        ])

        this.coinCountUI.add([
            sprite("coin-icon"),
            pos(-60, 0),
            scale(3),
            fixed()
        ])
    }
    displayBlinkingUIMesage(content, position) {

        const message = add([
            text(content, {
                size: 24,
                font: "Round"
            }),

            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"])
        ])

        message.onStateEnter("flash-up", async () => {
            await tween(
                message.opacity,
                0,  // Where to the value should go
                0.5,    //Time it should take
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )   //Allows to gradually change stuff

            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async () => {
            await tween(
                message.opacity,
                1,  // Where to the value should go
                0.5,    //Time it should take
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )   //Allows to gradually change stuff

            message.enterState("flash-up")
        })

    }


    displayMainMenu(){

        add([
            sprite("forest-Bg"),
            scale(4)
        ])

        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x, center().y-200),
            scale(7)
        ])

        this.displayBlinkingUIMesage(
            "Press [ ENTER ] to start",
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            play("confirm", {speed: 1.5})
            go("controls")
            }
        )    // Kaboom Function
    }

    displayControl() {

        add([
            sprite("forest-Bg"),
            scale(4)
        ])

        add([
            text("Controls", {font: "Round", size: 50}),
            area(),
            anchor("center"),
            pos(center().x, center().y - 200)
        ])

        // Child Concept in Kaboom
        const controlPrompts = add([
            pos(center().x + 100, center().y)
        ])
  
        controlPrompts.add([
            sprite("Up-key"),
            pos(0, -80)     // Values are relative to the parent, the values are offset
        ])

        controlPrompts.add([
            sprite("Right-key"),
            pos(80, 0)     // Values are relative to the parent, the values are offset
        ])

        controlPrompts.add([
            sprite("Down-key"),
            pos(0, 0)     // Values are relative to the parent, the values are offset
        ])

        controlPrompts.add([
            sprite("Left-key"),
            pos(-80, 0)     // Values are relative to the parent, the values are offset
        ])

        controlPrompts.add([
            sprite("Space-key"),
            pos(-320, -20),
            scale(1.4)
        ])

        controlPrompts.add([
            text("Jump", {font: "Round", size: 25}),
            pos(-280, 100)
        ])

        controlPrompts.add([
            text("Move", {font: "Round", size: 25}),
            pos(20, 100)
        ])

        this.displayBlinkingUIMesage(
            "Press [ ENTER ] to start", 
            vec2(center().x, center().y + 200)
        )

        onKeyPress("enter", () => {
            play("start-game", {speed: 1.5})
            go("1")
        })
    }

    addDarkBg() {
        add([ rect(270, 130), color(0,0,0), fixed() ])
    }

    finalScreen()
    {
        add([
            sprite("forest-Bg"),
            scale(4)
        ])

        add([
            text("You Won", {
                font: "Round",
                size: 100,
                color:(0,0,0)
            }),
            fixed(),
            anchor("center"),
            pos(center().x, center().y)
        ])

        this.replay()
    }

    Lossing()
    {
        add([
            sprite("castle"),
            scale(4)
        ])

        add([
            text("Game Over", {
                font: "Round",
                size: 100,
            }),
            fixed(),
            anchor("center"),
            pos(center().x, center().y-200)
        ])

        this.replay()

    }

    replay()
    {
        this.displayBlinkingUIMesage(
            "PRESS [ ENTER ] TO REPLAY",
            vec2(center().x, center().y + 100)
        )

        onKeyPress("enter", () => {
            play("start-game", {speed: 1.5})
            go("1")
        })
    }

}

export const uiManager = new UIManager()