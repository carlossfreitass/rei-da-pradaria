Pradaria.MainMenu = function (game) {};

Pradaria.MainMenu.prototype = {
    init: function(score) {
        var score = score || 0;
        this.highestScore = this.highestScore || 0;
        this.highestScore = Math.max(score, this.highestScore);
    },

	create: function () {
		// Menu Principal
		// Toca uma música, adiciona um background e um botão

		this.music = this.add.audio('openingMusic');
		this.music.loop = true;
		this.music.play();

		this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background', 92);

		// Velocidade do background
		this.background.autoScroll(-25, 0);
		this.splash = this.add.image(this.game.width / 2,this.game.height / 2, 'logo');
		this.splash.anchor.setTo(0.5);

        // Pontuação Máxima
        text = "Pontuação Máxima: " + this.highestScore;
        style = {
			font: "20px Times",
			fill: "#fff",
			align: "center",
		};

        this.score = this.game.add.text(this.game.width / 2, this.game.height - 50, text, style);
        this.score.anchor.set(0.5);

        // Instruções
        text = "Movimentação: WASD / Atacar: Botão Esquerdo do Mouse / Especial: Espaço";
        style = {
			font: "20px Times",
			fill: "#fff",
			align: "center"
		};

        this.instructions = this.game.add.text(this.game.width / 2, this.game.height - 25, text, style);
        this.instructions.anchor.set(0.5);

		// Botão Play
		this.playButton = this.add.button(this.game.width / 2, this.game.height / 2 + 100, 'playButton', this.startGame, this);
		this.playButton.anchor.setTo(0.5);
	},

	update: function () {
		//...
	},

	startGame: function (pointer) {
		// Quando o jogo é iniciado, para a música e inicia o jogo
		this.music.stop();
		this.state.start('Game');
	},

	shutdown: function() {
		this.music = null;
		this.splash = null;
        this.score = null;
        this.instructions = null;
        this.background = null;
        this.playButton = null;
    }
};