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
                "Привет. Меня зовут Миша.",
                "Я делаю софт.",
                "Я живу в Ярославле...",
                "...в компании Ани и двух кроликов.",
                "(Аня отошла)",
                "Если интересны мои проекты...",
                "или хотите связаться со мной,",
                "подойдите к компьютеру и нажмите пробел или энтер.",
                ""
            ],
            animSheet: new ig.AnimationSheet('media/char_small.png', 32, 32),
            size: { x: 16, y: 16 },
            offset: { x: 8, y: 16 },
            flip: true,
            accelDefault: 200,
            jump: 360,
            friction: { x: 500, y: 500 },
            maxVel: { x: 100, y: 160 },
            bubble: null,
            chatIdx: 0,
            timerStopped: false,
            inputOn: false,

            say: function (text, duration = 5) {
                ig.game.spawnEntity(
                    EntityChatbubble,
                    320,
                    240,
                    {
                        font: "PressStart2P",
                        fontSize: 10,
                        text: text,
                        color: "#5555FF",
                        fontColor: "#FFFFFF",
                        tracks: "me",
                        lifeSpan: duration,
                        borderColor: "#FFFFFF",
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
            },

            update: function () {
                if (!ig.game.pcVisited) {
                    if (!this.timerStopped) {
                        const secondsRemaining = Math.floor(this.timer.delta());
                        if (secondsRemaining === 0) {
                            if (this.chatIdx + 1 === this.phrases.length) {
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
                } else {
                    this.inputOn = true;
                    this.timer.pause();
                    this.timerStopped = true;
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
                //x-155-180 y-32-40 - левая клетка
                //x-201-224 y-32-40 - правая клетка
                //x-256-272 y-32-40 - стеллаж
                //x-123-135 y-32-40 - полка
                //x-16-40 y-42-48 - tv
                //x-70-90 y-32-40 - комп

                if (
                    Math.floor(this.pos.x) >= 16 &&
                    Math.floor(this.pos.x) <= 40 &&
                    Math.floor(this.pos.y) >= 42 &&
                    Math.floor(this.pos.y) <= 48 &&
                    ig.input.state("action")
                ) {
                    this.say("К телевизору подключен Switch.", 3);
                }

                if (
                    Math.floor(this.pos.x) >= 123 &&
                    Math.floor(this.pos.x) <= 135 &&
                    Math.floor(this.pos.y) >= 32 &&
                    Math.floor(this.pos.y) <= 40 &&
                    ig.input.state("action")
                ) {
                    this.say("Анины вещи (в реале их больше)", 3);
                }

                if (
                    Math.floor(this.pos.x) >= 155 &&
                    Math.floor(this.pos.x) <= 180 &&
                    Math.floor(this.pos.y) >= 32 &&
                    Math.floor(this.pos.y) <= 40 &&
                    ig.input.state("action")
                ) {
                    this.say("Всё вверх дном...", 3);
                }
                if (
                    Math.floor(this.pos.x) >= 201 &&
                    Math.floor(this.pos.x) <= 224 &&
                    Math.floor(this.pos.y) >= 32 &&
                    Math.floor(this.pos.y) <= 40 &&
                    ig.input.state("action")
                ) {
                    this.say("В сене явно видны контуры кролика.", 4);
                }
                if (
                    Math.floor(this.pos.x) >= 256 &&
                    Math.floor(this.pos.x) <= 272 &&
                    Math.floor(this.pos.y) >= 32 &&
                    Math.floor(this.pos.y) <= 40 &&
                    ig.input.state("action")
                ) {
                    this.say("Нижняя полка: Старое железо.", 2);
                    setTimeout(() => {
                        this.say("Вторая полка: Анины растения.", 2);
                        setTimeout(() => {
                            this.say("Третья полка: Сто мелочей", 2);
                            setTimeout(() => {
                                this.say("Верхняя полка: Домашний сервер.", 2);
                            }, 2500);
                        }, 2500)
                    }, 2500)
                }
                if (
                    Math.floor(this.pos.x) >= 70 &&
                    Math.floor(this.pos.x) <= 90 &&
                    Math.floor(this.pos.y) >= 32 &&
                    Math.floor(this.pos.y) <= 40 &&
                    ig.input.state('action')
                ) {
                    this.say("Секундочку...");
                    window.setTimeout(() => { ig.game.loadPC() }, 3000);
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