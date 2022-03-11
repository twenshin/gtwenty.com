ig.module('game.levels.main')
    .requires(
        'impact.image',
        'game.entities.player',
        'game.entities.chatbubble',
        'impact.debug.debug'
    )
    .defines(function () {
        LevelMain = /*JSON[*/{ "entities": [{ "type": "EntityPlayer", "x": 265, "y": 128, "settings": { "name": "me" } },], "layer": [{ "name": "background", "width": 2, "height": 1, "linkWithCollision": false, "visible": 1, "tilesetName": "media/Home.png", "repeat": false, "preRender": false, "distance": "1", "tilesize": 240, "foreground": false, "data": [[1, 2]] }] }/*]JSON*/;
        LevelMainResources = [new ig.Image('media/Home.png')];
    });