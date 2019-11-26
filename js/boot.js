var bootState = {
    preload: function(){
        game.load.image('progressBar', 'assets/fundo/progressBar.png');
    },

    create: function(){                 
        game.state.start('load');     
    }
};