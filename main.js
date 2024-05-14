import kaboom from "./libs/kaboom.mjs"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { Level } from "./utils/Level.js"
import { level1Layout, level1Mappings } from "./content/Level 1/level1Layout.js"
import { level2Layout, level2Mappings } from "./content/Level 2/level2Layout.js"
import { level3Layout, level3Mappings } from "./content/Level 3/level3layout.js"
import { Player } from "./entities/player.js"
import { attachCamera } from "./utils/camera.js"
import { level1Config } from "./content/Level 1/config.js"
import { level2Config } from "./content/Level 2/config.js"
import { level3Config } from "./content/Level 3/config.js"

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

        setGravity(1400)
        const level1 = new Level()
        level1.drawBg("forest-Bg")
        level1.drawMap(level1Layout, level1Mappings)
        const player = new Player(
            level1Config.playerStartPosX, 
            level1Config.playerStartPosY, 
            level1Config.playerSpeed, 
            level1Config.jumpForce, 
            level1Config.nbLives, 
            1, 
            false
        )

        player.enablePassthrough()
        player.update()
        player.enableCoinPickUp()

        attachCamera(player.gameObj, 0, 200)
        level1.drawWaves("water", "wave")

        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLivesCount(uiManager.livesCountUI)
    
        
    },
    2: () => {
        setGravity(1400)
        const level2 = new Level()
        level2.drawBg("sky-Bg-0")
        level2.drawBg("sky-Bg-1")
        level2.drawBg("sky-Bg-2")
        level2.drawMap(level2Layout, level2Mappings)
        const player = new Player(
            level2Config.playerStartPosX, 
            level2Config.playerStartPosY, 
            level2Config.playerSpeed, 
            level2Config.jumpForce, 
            level2Config.nbLives, 
            2, 
            false
        )

        player.enablePassthrough()
        player.update()
        player.enableCoinPickUp()

        attachCamera(player.gameObj, 0, 200)
        level2.drawWaves("clouds", "wave")

        uiManager.addDarkBg()
        
        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLivesCount(uiManager.livesCountUI)
    
        
    },
    3: () => {
        
        setGravity(1400)
        const level3 = new Level()
        level3.drawBg("castle")
        level3.drawMap(level3Layout, level3Mappings)
        const player = new Player(
            level3Config.playerStartPosX, 
            level3Config.playerStartPosY, 
            level3Config.playerSpeed, 
            level3Config.jumpForce, 
            level3Config.nbLives, 
            3, 
            true
        )

        player.enablePassthrough()
        player.update()
        player.enableCoinPickUp()

        attachCamera(player.gameObj, 0, 200)
        level3.drawWaves("lava", "wave")

        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLivesCount(uiManager.livesCountUI)
    
        
    },
    gameOver: () => {
        uiManager.Lossing()
    },
    endScreen: () => {
        uiManager.finalScreen()
    }
}

for(const key in scenes){
    scene(key, scenes[key])    //Scene function creates the scenes
}

// Kaboom requires to pass a default screen
go("menu")
