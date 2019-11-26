var loadState = {
    preload: function(){
        var txtLoading = game.add.text(780, 150,'LOADING...',{font: '30px Arial', fill: '#fff'});
        txtLoading.anchor.set(.5);
        
        //Barra progresso
        var progressBar = game.add.sprite(780, 250, 'progressBar');
        progressBar.anchor.set(.5);

        //Animação da barra de progresso
        game.load.setPreloadSprite(progressBar);


        //Imagens de fundo
        game.load.image('bg1','assets/fundo/bg1.png');
        game.load.image('bg2','assets/fundo/bg2.png');
        game.load.image('bg3','assets/fundo/bg3.png');

        //Assets
        game.load.image('balao','assets/balao/balao.png');
        game.load.image('botao_avancar','assets/botao/3_botao_avancar.png');
        game.load.image('botao_voltar','assets/botao/2_botao_voltar.png');
        game.load.image('botao_menu','assets/botao/4_botao_menu.png');
        game.load.image('botao_menu','assets/botao/4_botao_menu.png');
        game.load.image('escolha','assets/comida/escolha.png');

        //Assets
        game.load.spritesheet('menino', 'assets/personagens/menino.png',266.5,500);
        game.load.spritesheet('gato', 'assets/personagens/gato.png',165,260);
        game.load.spritesheet('cachorro', 'assets/personagens/cachorro.png',224,260);
        game.load.spritesheet('coelho', 'assets/personagens/coelho.png',150,295);
        game.load.spritesheet('papagaio', 'assets/personagens/papagaio.png',195,260);
        game.load.spritesheet('macaco', 'assets/personagens/macaco.png',150,255);

        //Audio
        game.load.audio('tela1','audio/tela1.ogg');
        game.load.audio('acertou','audio/acertou.ogg');
        game.load.audio('errou','audio/errou.ogg');

        game.physics.startSystem(Phaser.Physics.ARCADE);
    },
    
    create: function(){
        game.state.start('menu');
    }
};