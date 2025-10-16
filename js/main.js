var Pradaria = Pradaria || {};

// Inicia um novo jogo e configura seu tamanho na tela
Pradaria.game = new Phaser.Game(
    window.visualViewport ? window.visualViewport.width : window.innerWidth,
    window.visualViewport ? window.visualViewport.height : window.innerHeight,
    Phaser.AUTO, '', null, false, false
);

// Tamanho de tela responsivo
const DELAY = 200;

let timer;
window.addEventListener('resize', () => {
    clearTimeout(timer);
    timer = setTimeout(() => location.reload(), DELAY);
});

// Também monitora visualViewport
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(() => location.reload(), DELAY);
    })
}

Pradaria.game.state.add('Boot', Pradaria.Boot);
Pradaria.game.state.add('Preloader', Pradaria.Preloader);
Pradaria.game.state.add('MainMenu', Pradaria.MainMenu);
Pradaria.game.state.add('Game', Pradaria.Game);

Pradaria.game.state.start('Boot');