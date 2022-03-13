ig.module(
    'game.entities.iconvk'
)
    .requires(
        'impact.entity',
        'game.entities.projects',
        'plugins.font'
    )
    .defines(function () {
        EntityIconvk = ig.Entity.extend({

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.NONE,
            animSheet: new ig.AnimationSheet('media/icons.png', 16, 16),
            size: { x: 16, y: 16 },
            offset: { x: 0, y: 0 },
            font: new Font('12px PressStart2P'),
            state: false,

            init: function (x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim('idle', 1, [4]);
            },

            update: function () {
                if (
                    ig.input.pressed("click") &&
                    ig.input.mouse.x >= (this.pos.x - ig.game.screen.x) &&
                    ig.input.mouse.x <= (this.pos.x - ig.game.screen.x) + this.size.x &&
                    ig.input.mouse.y >= (this.pos.y - ig.game.screen.y) &&
                    ig.input.mouse.y <= (this.pos.y - ig.game.screen.y) + this.size.y
                ) {
                    const el = document.createElement("a");
                    el.href = "https://vk.com/twenshin";
                    el.target = "_blank";
                    el.click();
                    //this.state = true;
                    //ig.game.spawnEntity(EntityProjects, 40, 50, { "name": "projectsfolder" });
                }
                //if (this.state === true && !ig.game.getEntityByName("projectsfolder")) {
                //    this.state = false;
                //}

                this.parent();
            },
            draw: function () {
                if (!this.state) {
                    this.font.draw("VK", this.pos.x - ig.game.screen.x + 8, this.pos.y - ig.game.screen.y + 16, "center");
                }
                this.parent();
            }
        });
    });