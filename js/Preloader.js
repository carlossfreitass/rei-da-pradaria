// Arquivo responsável pelo carregamento de todos os assets que serão utilizados no jogo

Pradaria.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;
};

Pradaria.Preloader.prototype = {
	preload: function () {
		// Background e barra de carregamento
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);

		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.preloadBar);

		//	Assets do jogo
		this.load.image('playButton', 'assets/images/play.png');
		this.load.image('flame', 'assets/images/flame.png');
		this.load.image('sword', 'assets/images/sword.png');
		this.load.image('levelParticle', 'assets/images/level-particle.png');
		this.load.image('spellParticle', 'assets/images/spell-particle.png');
		this.load.image('background', 'assets/images/background.png', 16, 16);

		this.load.spritesheet('tiles', 'assets/images/tiles.png', 16, 16);
		this.load.spritesheet('things', 'assets/images/things.png', 16, 16);
		this.load.spritesheet('characters', 'assets/images/characters.png', 16, 16);
		this.load.spritesheet('dead', 'assets/images/dead.png', 16, 16);
		this.load.spritesheet('potions', 'assets/images/potions.png', 16, 16);
		this.load.spritesheet('dragons', 'assets/images/dragons.png', 32, 32);
		this.load.spritesheet('fireball', 'assets/images/fireball.png', 16, 16);
		this.load.spritesheet('spell', 'assets/images/spell.png', 12, 12);

		this.load.audio('openingMusic', 'assets/sound/opening.ogg');
		this.load.audio('overworldMusic', 'assets/sound/overworld.ogg');
		this.load.audio('attackSound', 'assets/sound/attack.wav');
		this.load.audio('playerSound', 'assets/sound/player.wav');
		this.load.audio('skeletonSound', 'assets/sound/skeleton.wav');
		this.load.audio('slimeSound', 'assets/sound/slime.wav');
		this.load.audio('batSound', 'assets/sound/bat.wav');
		this.load.audio('ghostSound', 'assets/sound/ghost.wav');
		this.load.audio('spiderSound', 'assets/sound/spider.wav');
		this.load.audio('goldSound', 'assets/sound/gold.wav');
		this.load.audio('potionSound', 'assets/sound/potion.ogg');
		this.load.audio('levelSound', 'assets/sound/level.ogg');
		this.load.audio('fireballSound', 'assets/sound/fireball.wav');
		this.load.audio('dragonSound', 'assets/sound/dragon.wav');
	},

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
		// Faz a sincronização da música com o menu
		if (this.cache.isSoundDecoded('openingMusic') && this.ready == false){
			this.ready = true;
			this.state.start('MainMenu');
		}
	}
};