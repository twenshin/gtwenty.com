ig.module('game.levels.pc')
    .requires(
        'impact.image',
        'game.entities.chatbubble',
        'game.entities.icon',
        'game.entities.iconcall',
        'game.entities.iconmail',
        'game.entities.iconvk',
        'game.entities.iconback',
        'game.entities.dot',
        'impact.debug.debug'
    )
    .defines(function () {
        const levelData = [];
        for (let i = 0; i < 15; i++) {
            const rowData = [];
            for (let j = 1; j <= 20; j++) {
                rowData.push(20 * i + j);
            }
            levelData.push(rowData);
        };
        console.log(levelData);
        LevelPC = /*JSON[*/{
            "entities": [
                { "type": "EntityIcon", "x": 40, "y": 30, "settings": { "name": "projectsicon" } },
                { "type": "EntityIconcall", "x": 40, "y": 60, "settings": { "name": "callicon" } },
                { "type": "EntityIconmail", "x": 40, "y": 90, "settings": { "name": "mailicon" } },
                { "type": "EntityIconvk", "x": 40, "y": 120, "settings": { "name": "vkicon" } },
                { "type": "EntityIconback", "x": 40, "y": 150, "settings": { "name": "backicon" } },
                { "type": "EntityDot", "x": 150, "y": 90, "settings": { "name": "dot" } },
            ],
            "layer": [
                {
                    "name": "background",
                    "width": 20,
                    "height": 15,
                    "linkWithCollision": false,
                    "visible": 1,
                    "tilesetName": "media/PC_BG.png",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 16,
                    "foreground": false,
                    "data": levelData
                }
            ]
        }/*]JSON*/;
        LevelPCResources = [new ig.Image('media/Home.png')];
    });