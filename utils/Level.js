export class Level
{
    drawMap(levelLayout, mappings)
    {
        const layerSetting = {
            tileWidth: 16,
            tileHeight: 12,
            tiles: mappings
        }

        this.map = []   // Contains layers of level map
        for( const layerLayout of levelLayout)
        {
            this.map.push(addLevel(layerLayout, layerSetting))
        }

        for(const layer of this.map)
        {
            layer.use(scale(4))
        }
    }

    drawBg(bgSprite)
    {
        add([sprite(bgSprite), fixed(), scale(4)])
    }
}