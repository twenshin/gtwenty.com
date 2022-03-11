ig.module(
	'game.main'
)
	.requires(
		'impact.game',
		'impact.font',
		'plugins.font',
		'game.levels.main',
		'game.entities.player'
	)
	.defines(function () {

		MyGame = ig.Game.extend({

			// Load a font
			font: new Font('20px PressStart2P'),
			timer: new ig.Timer(0),
			gravity: 0,

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
				this.loadLevel(LevelMain);
			},

			update: function () {
				// Update all entities and backgroundMaps
				this.parent();

				// Add your own, additional update code here
				var player = this.getEntitiesByType(EntityPlayer)[0];
				if (player) {
					this.screen.x = player.pos.x - ig.system.width / 2;
					this.screen.y = player.pos.y - ig.system.height / 2;
				}
			},

			draw: function () {
				// Draw all entities and backgroundMaps
				this.parent();
			}
		});

		// Start the Game with 60fps, a resolution of 320x240, scaled
		// up by a factor of 2
		ig.main('#canvas', MyGame, 60, window.innerWidth / 2, window.innerHeight / 2, 2);

	});
