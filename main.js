import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { Level } from "./utils/Level.js"
import { level1Layout, level1Mappings } from "./content/Level 1/level1Layout.js"
import { Player } from "./entities/player.js" 

kaboom({
    width: 1280,
    height: 720,
    letterbox: true     // On resizing the window preserves the aspect ratio
})    //Function that initiates the canvas

load.fonts()
load.sounds()
load.assets()


const scenes = {
    menu: () => {
        //Code required for the scene
        //add([text("Testing"), pos(500, 500), color(0,0,0)]) //Array of component
        uiManager.displayMainMenu()
    },

    controls: () => {
        uiManager.displayControl()
    },

    1: () => {
        const level1 = new Level()
        level1.drawBg("forest-Bg")
        level1.drawMap(level1Layout, level1Mappings)
        const player = new Player(1500, 100, 400, 
            3, 650, 3, 1, false )
        level1.drawWaves("water", "wave")
    },
    2: () => {},
    3: () => {},
    gameOver: () => {},
    endScreen: () => {}
}

for(const key in scenes){
    scene(key, scenes[key])    //Scene function creates the scenes
}

// Kaboom requires to pass a default screen
go("menu")
