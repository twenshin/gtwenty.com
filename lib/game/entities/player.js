ig.module(
    'game.entities.player'
)
    .requires(
        'impact.entity',
        'game.entities.chatbubble'
    )
    .defines(function () {
        EntityPlayer = ig.Entity.extend({

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.ACTIVE,
            phrases: [
                "Привет",
                "Моя звать Борат",
                "I am a developer",
                ""
            ],
            animSheet: new ig.AnimationSheet('media/char.png', 64, 64),
            size: { x: 32, y: 64 },
            offset: { x: 16, y: 0 },
            flip: true,
            accelDefault: 200,
            jump: 360,
            friction: { x: 500, y: 500 },
            maxVel: { x: 100, y: 160 },
            bubble: null,
            chatIdx: 1,
            timerStopped: false,
            inputOn: false,

            say: function (text) {
                ig.game.spawnEntity(
                    EntityChatbubble,
                    320,
                    240,
                    {
                        font: "PressStart2P",
                        fontSize: 12,
                        text: text,
                        color: "#5555FF",
                        fontColor: "#FFFFFF",
                        tracks: "me",
                        lifeSpan: 5
                    },
                );
            },

            init: function (x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim('idle', 1, [130]);
                this.addAnim('walkLeft', 0.10, [117, 118, 119, 120, 121, 122, 123, 124]);
                this.addAnim('walkUp', 0.10, [104, 105, 106, 107, 108, 109, 110, 111]);
                this.addAnim('walkDown', 0.10, [130, 131, 132, 133, 134, 135, 136, 137]);
                this.addAnim('walkRight', 0.10, [143, 144, 145, 146, 147, 148, 149, 150]);
                this.timer = new ig.Timer(6);
                this.say(this.phrases[0]);
            },

            update: function () {
                if (!this.timerStopped) {
                    const secondsRemaining = Math.floor(this.timer.delta());
                    if (secondsRemaining === 0) {
                        console.log(this.timer);
                        if (this.chatIdx + 1 === this.phrases.length) {
                            console.log("Pause!");
                            this.timer.pause();
                            this.timerStopped = true;
                            this.inputOn = true;
                        } else {
                            this.say(this.phrases[this.chatIdx]);
                            this.chatIdx += 1;
                            this.timer.reset();
                        }
                    }
                }
                var accel = this.accelDefault;
                if (this.inputOn) {
                    if (ig.input.state('left')) {
                        this.accel.x = -accel;
                        this.currentAnim = this.anims.walkLeft;
                    } else if (ig.input.state('right')) {
                        this.accel.x = accel;
                        this.currentAnim = this.anims.walkRight;
                    } else if (ig.input.state("up")) {
                        this.accel.y = -accel;
                        this.currentAnim = this.anims.walkUp;
                    } else if (ig.input.state("down")) {
                        this.accel.y = accel;
                        this.currentAnim = this.anims.walkDown;
                    } else {
                        this.accel.x = 0;
                        this.accel.y = 0;
                        this.currentAnim = this.anims.idle;
                    }
                }
                if (Math.floor(this.pos.x) >= 160 && Math.floor(this.pos.x) <= 170 && Math.floor(this.pos.y) >= 60 && Math.floor(this.pos.y) <= 70) {
                    this.say("Let me show you");
                    window.setTimeout(() => { this.say("Showing computer") }, 3000);
                }
                if (ig.input.state("up") || ig.input.state("down") || ig.input.state("left") || ig.input.state("right")) {
                    console.log(this.pos);
                }

                this.parent();
            },
            draw: function () {
                this.parent();
            }
        });
    });