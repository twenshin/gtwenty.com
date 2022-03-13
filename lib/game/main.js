ig.module(
	'game.main'
)
	.requires(
		'impact.game',
		'impact.font',
		'plugins.font',
		'game.levels.main',
		'game.levels.pc',
		'game.entities.player'
	)
	.defines(function () {

		MyGame = ig.Game.extend({

			// Load a font
			font: new Font('20px PressStart2P'),
			timer: new ig.Timer(0),
			gravity: 0,
			currentLevel: "home",
			pcVisited: false,

			init: function () {
				// Initialize your game here; bind keys etc.
				ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
				ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
				ig.input.bind(ig.KEY.UP_ARROW, 'up');
				ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
				ig.input.bind(ig.KEY.A, 'left');
				ig.input.bind(ig.KEY.D, 'right');
				ig.input.bind(ig.KEY.W, 'up');
				ig.input.bind(ig.KEY.S, 'down');
				ig.input.bind(ig.KEY.SPACE, 'action');
				ig.input.bind(ig.KEY.ENTER, 'action');
				ig.input.bind(ig.KEY.MOUSE1, 'click');
				this.loadLevel(LevelMain);
			},
			loadPC: function () {
				this.loadLevel(LevelPC);
				this.currentLevel = "pc";
			},
			loadHome: function () {
				this.loadLevel(LevelMain);
				this.currentLevel = "home";
				this.pcVisited = true;
			},
			update: function () {
				// Update all entities and backgroundMaps
				this.parent();
				if (this.currentLevel === "home") {
					this.screen.x = 160 - ig.system.width / 2;
					this.screen.y = -ig.system.height / 2;
				} else {
					this.screen.x = -ig.system.width / 2 + 160;
					this.screen.y = -ig.system.height + 240;
				}

				// Add your own, additional update code here
			},

			draw: function () {
				// Draw all entities and backgroundMaps
				this.parent();
				if (this.currentLevel === "home") {
					this.font.draw(
						"Перемещение: Стрелки/WASD",
						ig.system.width / 2,
						ig.system.height - 40,
						'center'
					);
					this.font.draw(
						"Действие: Пробел/Enter",
						ig.system.width / 2,
						ig.system.height - 20,
						'center'
					);
				} else if (this.currentLevel === "pc") {
					this.font.draw(
						"Используйте мышь/тачпад для управления.",
						ig.system.width / 2,
						ig.system.height - 10,
						'center'
					);
				}
			}
		});

		// Start the Game with 60fps, a resolution of 320x240, scaled
		// up by a factor of 2
		ig.main('#canvas', MyGame, 60, window.innerWidth / 3, window.innerHeight / 3, 3);
		if (ig.ua.mobile) {
			/* ToDo */
		}
	});
