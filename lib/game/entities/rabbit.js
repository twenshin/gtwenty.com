ig.module(
    'game.entities.rabbit'
)
    .requires(
        'impact.entity',
    )
    .defines(function () {
        EntityRabbit = ig.Entity.extend({

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.LITE,
            animSheet: new ig.AnimationSheet('media/rabbit.png', 16, 16),
            size: { x: 16, y: 16 },
            offset: { x: 0, y: 0 },
            flip: true,
            accelDefault: 50,
            jump: 360,
            friction: { x: 500, y: 500 },
            maxVel: { x: 50, y: 50 },
            timer: new ig.Timer(5),
            directions: ["left", "right", "up", "down"],
            currentDirection: "idle",

            init: function (x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim('idle', 1, [1]);
                this.addAnim('walkLeft', 0.10, [17, 18, 19, 20, 21, 22, 23, 24]);
                this.addAnim('walkUp', 0.10, [9, 10, 11, 12, 13, 14, 15, 16]);
                this.addAnim('walkDown', 0.10, [1, 2, 3, 4, 5, 6, 7, 8]);
                this.addAnim('walkRight', 0.10, [25, 26, 27, 28, 29, 30, 31, 32]);
            },

            update: function () {
                if (this.timer.delta() > 0) {
                    this.currentDirection = "idle";
                    this.timer.set(2);
                    this.currentDirection = this.directions[Math.floor(Math.random() * this.directions.length)];
                }
                var accel = this.accelDefault;
                if (this.currentDirection === "left") {
                    this.vel.x = -accel;
                    this.currentAnim = this.anims.walkLeft;
                } else if (this.currentDirection === "right") {
                    this.vel.x = accel;
                    this.currentAnim = this.anims.walkRight;
                } else if (this.currentDirection === "up") {
                    this.vel.y = -accel;
                    this.currentAnim = this.anims.walkUp;
                } else if (this.currentDirection === "down") {
                    this.vel.y = accel;
                    this.currentAnim = this.anims.walkDown;
                } else {
                    this.vel.x = 0;
                    this.vel.y = 0;
                    this.currentAnim = this.anims.idle;
                }

                this.parent();
            },
            draw: function () {
                this.parent();
            }
        });
    });