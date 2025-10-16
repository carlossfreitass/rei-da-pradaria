// Arquivo responsável pela preparação do ambiente
// Responsividade, configurações padrões e tela de carregamento.

var Pradaria = {};

Pradaria.Boot = function (game) {
    //...
};

Pradaria.Boot.prototype = {
    init: function () {
        //  Define o número máximo de toques simultâneos na tela
        this.input.maxPointers = 1;

        // Caso a tela perca o foco, o jogo será pausado
        this.stage.disableVisibilityChange = true;

        // Permite a responsividade de acordo com o dispositivo
        if (this.game.device.desktop) {
            this.scale.pageAlignHorizontally = true;
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }
    },

    preload: function () {
        // Assets para tela de carregamento
        // Background e barra de carregamento
        this.load.image('logo', 'assets/images/logo.png');
        this.load.image('preloaderBar', 'assets/images/preload-bar.png');
    },

    create: function () {
        // Iniciando o carregamento
        this.state.start('Preloader');
    }
};