ig.module(
    'game.entities.dot'
)
    .requires(
        'impact.entity',
    )
    .defines(function () {
        EntityDot = ig.Entity.extend({

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.NONE,
            size: { x: 1, y: 1 },
            offset: { x: 0, y: 0 },
            state: false,

            init: function (x, y, settings) {
                this.parent(x, y, settings);
            },

            update: function () {
                this.parent();
            },
            draw: function () {
                this.parent();
            }
        });
    });