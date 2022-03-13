ig.module('game.levels.main')
    .requires(
        'impact.image',
        'game.entities.player',
        'game.entities.chatbubble',
        'game.entities.rabbit',
        'game.entities.rabbit2',
        'impact.debug.debug'
    )
    .defines(function () {
        LevelMain = /*JSON[*/{
            "entities": [
                { "type": "EntityPlayer", "x": 120, "y": 60, "settings": { "name": "me" } },
                { "type": "EntityRabbit2", "x": 160, "y": 50, "settings": { "name": "adolf" } },
                { "type": "EntityRabbit", "x": 220, "y": 50, "settings": { "name": "iriska" } },
            ],
            "layer": [
                {
                    "name": "background",
                    "width": 18,
                    "height": 10,
                    "linkWithCollision": false,
                    "visible": 1,
                    "tilesetName": "media/home_pack.png",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 16,
                    "foreground": false,
                    "data": [
                        [43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 2, 116, 116],
                        [64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 2, 116, 116],
                        [181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 43, 181, 182],
                        [181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 64, 181, 182],
                        [181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 182, 181, 182],
                    ]
                },
                {
                    "name": "stuff",
                    "width": 18,
                    "height": 10,
                    "linkWithCollision": false,
                    "visible": 1,
                    "tilesetName": "media/home_pack.png",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 16,
                    "foreground": false,
                    "data": [
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 13, 14],
                        [169, 16, 17, 44, 82, 83, 84, 44, 178, 44, 121, 122, 44, 121, 122, 44, 34, 35],
                        [190, 37, 38, 44, 103, 104, 105, 19, 199, 44, 142, 143, 39, 142, 143, 44, 55, 56],
                        [44, 44, 44, 44, 44, 60, 44, 44, 44, 44, 220, 222, 44, 220, 222, 44, 44, 44],
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
                    ]
                },
                {
                    "name": "more_stuff",
                    "width": 18,
                    "height": 10,
                    "linkWithCollision": false,
                    "visible": 1,
                    "tilesetName": "media/home_pack.png",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 16,
                    "foreground": false,
                    "data": [
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
                        [44, 44, 44, 44, 170, 44, 44, 44, 179, 44, 114, 93, 44, 170, 44, 44, 44, 44],
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 60, 44, 44, 44, 44, 44, 44, 44, 44],
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
                    ]
                },
                {
                    "name": "fg",
                    "width": 18,
                    "height": 10,
                    "linkWithCollision": false,
                    "visible": 1,
                    "tilesetName": "media/home_pack.png",
                    "repeat": false,
                    "preRender": false,
                    "distance": "1",
                    "tilesize": 16,
                    "foreground": true,
                    "data": [
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
                        [44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
                        [44, 176, 177, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 163, 164],
                        [44, 197, 198, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44],
                    ]
                },
                {
                    "name": "collision",
                    "width": 20,
                    "height": 7,
                    "linkWithCollision": false,
                    "visible": 1,
                    "tilesetName": "",
                    "repeat": false,
                    "preRender": false,
                    "distance": 1,
                    "tilesize": 16,
                    "foreground": false,
                    "data": [
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    ],
                }
            ]
        }/*]JSON*/;
        LevelMainResources = [new ig.Image('media/home_pack.png')];
    });