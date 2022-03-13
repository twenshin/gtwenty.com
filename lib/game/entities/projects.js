ig.module(
    'game.entities.projects'
)
    .requires(
        'impact.entity',
        'game.entities.chatbubble',
        'plugins.font'
    )
    .defines(function () {
        EntityProjects = ig.Entity.extend({

            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.NONE,
            animSheet: new ig.AnimationSheet('media/projects.png', 280, 142),
            size: { x: 100, y: 100 },
            offset: { x: 0, y: 0 },
            font: new Font('12px PressStart2P'),
            state: false,
            timer: new ig.Timer(18),
            stepTimer: new ig.Timer(3),
            step: 0,
            replica: 0,
            lock: false,
            replicas: [
                [
                    "Году, этак, в 2013 я занимался разработкой сервера игры Loong Online.",
                    "Для привлечения игроков я сделал сайт проекта на HTML, CSS и PHP.",
                    "В нём был функционал регистрации, смены пароля, и много чего ещё.",
                    "P.S. Сервер собирал до 500 игроков в сети, больше, чем любой другой в то время."
                ],
                [
                    "В 2015 году я работал в региональном интернет-провайдере.",
                    "Я занимался разработкой софта для внутреннего использования.",
                    "Основной созданный мной продукт - система трекинга заявок на выезд инженера.",
                    "Это первый мой проект с использованием Python и Materialize.css",
                    "Инженеры были довольны."
                ],
                [
                    "В 2018 году ко мне постучался владелец одного сервера Loong Online.",
                    "Он попросил разработать для него сайт.",
                    "Я сделал его, используя Yii2 с кучей библиотек.",
                    "В нём был личный кабинет, топ игроков и многое другое.",
                ],
                [
                    "В 2019 году мне написали владельцы автомойки в Ярославле.",
                    "Попросили сделать сайт с интеграцией с их софтом.",
                    "Изначально делали на Wordpress, но его быстро сломали.",
                    "За половину недели переписал на Yii2, до сих пор работает."
                ],
                [
                    "С 2018 года я участвовал в стартапе GFAIVE.",
                    "Мы занимались разработкой AI-платформы в сфере Fashion-ритейла.",
                    "Я занимал роль человека-оркестра.",
                    "Принимал участие в разработке как бэка (Python/Flask/Greenplum), так и фронта (React),",
                    "Выводил код DSов в продакшен,",
                    "Собеседовал кандидатов,",
                    "Поддерживал IT-инфраструктуру, и т.д.",
                    "В марте 2022, из-за ситуации в России, стартап пришлось заморозить.",
                    "В общем, ищу работу. :( Звоните, пишите, буду рад."
                ]
            ],
            animList: [
                "loong",
                "yats",
                "reloong",
                "mz",
                "empty"
            ],

            init: function (x, y, settings) {
                this.parent(x, y, settings);
                this.addAnim('loong', 1, [0]);
                this.addAnim('yats', 1, [1]);
                this.addAnim('reloong', 1, [2]);
                this.addAnim('mz', 1, [3]);
                this.addAnim('empty', 1, [4]);
            },
            say: function (text, duration = 5) {
                ig.game.spawnEntity(
                    EntityChatbubble,
                    this.pos.x - ig.game.screen.x,
                    this.pos.y - ig.game.screen.y,
                    {
                        borderColor: "#FFFFFF",
                        font: "PressStart2P",
                        fontSize: 6,
                        padding: 10,
                        margin: 0,
                        text: text,
                        color: "#5555FF",
                        fontColor: "#FFFFFF",
                        lifeSpan: duration,
                        tracks: "dot",
                    },

                );
            },
            update: function () {
                if (this.timer.delta() > 0) {
                    this.step += 1;
                    console.log("step:", this.step);
                    this.currentAnim = this.anims[this.animList[this.step]];
                    this.replica = 0;
                    this.stepTimer.set(3);
                    this.step === 4 ? this.timer.set(30) : this.timer.set(16);
                }
                if (this.stepTimer.delta() > 0) {
                    console.log("replica:", this.replica);
                    this.say(this.replicas[this.step][this.replica], 3);
                    this.stepTimer.set(3);
                    this.replica += 1;
                }
                if (this.step === 5) {
                    ig.game.removeEntity(this);
                }
                this.parent();
            },
            draw: function () {
                this.parent();
            }
        });
    });