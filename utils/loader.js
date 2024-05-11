export const load = {
    fonts: () => {
        loadFont("Round", "./assets/Round9x13.ttf")
    },

    assets: () => {

        loadSprite("forest-Bg", "./assets/Forest_Background_0.png")
        loadSprite("logo", "./assets/Logo.png")

        loadSprite("Up-key", "./assets/Arrow_Up_Key_Dark.png")
        loadSprite("Down-key", "./assets/Arrow_Down_Key_Dark.png")
        loadSprite("Right-key", "./assets/Arrow_Right_Key_Dark.png")
        loadSprite("Left-key", "./assets/Arrow_Left_Key_Dark.png")
        loadSprite("Space-key", "./assets/Space_Key_Dark.png")

        loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                "ml-2": 6,
                "mm-2": 7,
                "mr-2": 8,
                bl: 9,
                bm: 10,
                br: 12
            }
        })
        
        loadSprite("bridge", "./assets/Bridge.png")
        loadSprite("coin", "./assets/Coin.png")
        
        loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              "ml-2": 6,
              "mm-2": 7,
              "mr-2": 8,
            },
          })
    },

    sounds: () => {
        loadSound("confirm", "./sounds/sounds_confirm-ui.wav")
        loadSound("start-game", "./sounds/start.ogg")
    }
}

