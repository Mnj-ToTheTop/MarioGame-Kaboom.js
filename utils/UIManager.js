class UIManager {
    
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
        /*
        add([
            sprite("Up-key"),
            scale(1.2),
            pos(center().x + 200, center().y - 100)
        ])

        add([
            sprite("Down-key"),
            scale(1.2),
            pos(center().x + 200, center().y)
        ])

        add([
            sprite("Left-key"),
            scale(1.2),
            pos(center().x + 100, center().y)
        ])

        add([
            sprite("Right-key"),
            scale(1.2),
            pos(center().x + 300, center().y)
        ])

        add([
            sprite("Space-key"),
            scale(1.75),
            pos(center().x - 300, center().y - 25)
        ])*/

    }
}

export const uiManager = new UIManager()