export const load = {
    fonts: () => {
        loadFont("Round", "./assets/Round9x13.ttf")
    },

    assets: () => {
        loadSprite("sky-Bg-1", "./assets/Sky_Background_1.png")
        loadSprite("sky-Bg-0", "./assets/Sky_Background_0.png")
        loadSprite("sky-Bg-2", "./assets/Sky_Background_2.png")
        loadSprite("castle", "./assets/Castle_Background_0.png")
        loadSprite("forest-Bg", "./assets/Forest_Background_0.png")
        loadSprite("logo", "./assets/Logo.png")
        loadSprite("coin-icon", "./assets/Coins_Ui.png")
        loadSprite("Up-key", "./assets/Arrow_Up_Key_Dark.png")
        loadSprite("Down-key", "./assets/Arrow_Down_Key_Dark.png")
        loadSprite("Right-key", "./assets/Arrow_Right_Key_Dark.png")
        loadSprite("Left-key", "./assets/Arrow_Left_Key_Dark.png")
        loadSprite("Space-key", "./assets/Space_Key_Dark.png")
        loadSprite("star-red", "./assets/Stars_Ui.png")
        loadSprite("water", "./assets/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0, to: 7,
                    speed: 16, loop: true,
                },

                "wave-reversed": {
                    from: 7, to: 0,
                    speed: 16, loop: true,
                },
            }
        })

        loadSprite("lava", "./assets/Lava.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0, to: 7,
                    speed: 16, loop: true,
                },

                "wave-reversed": {
                    from: 7, to: 0,
                    speed: 16, loop: true,
                },
            }
        })
        
        loadSprite("clouds", "./assets/Clouds.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                wave: {
                    from: 0, to: 7,
                    speed: 16, loop: true,
                },

                "wave-reversed": {
                    from: 7, to: 0,
                    speed: 16, loop: true,
                },
            }
        })

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
        
        loadSprite("bricks-tileset", "./assets/Brick_Tileset.png", {
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

        loadSprite("rock-tileset", "./assets/Grass_Rock_Tileset.png", {
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

          loadSprite("bricks-oneway-tileset", "./assets/Brick_Oneway.png", {
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

          loadSprite("rock-oneway-tileset", "./assets/Grass_Rock_Oneway.png", {
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

        loadSprite("player", "./assets/Player.png", {
            sliceX: 4,
            sliceY: 6,
            anims: {
                idle: {
                    from: 0, to: 3, loop: true
                },

                run: {
                    from: 4, to: 7, loop: true 
                },
                
                "jump-up": 8,
                "jump-down": 9
            }
        })

    },

    sounds: () => {
        loadSound("jump-sound", "./sounds/jump.wav")
        loadSound("confirm", "./sounds/sounds_confirm-ui.wav")
        loadSound("start-game", "./sounds/start.ogg")
        loadSound("coin", "./sounds/coin.wav")
        loadSound("hit", "./sounds/hit.wav")
    }
}

