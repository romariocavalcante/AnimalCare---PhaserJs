var player, balao, texto, buttonAvancar,buttonVoltar,buttonMenu, quant = 0;
var stage1State = {
    create: function(){
        //Fundo
        var fundo = game.add.sprite(0,0,'bg1');
        fundo.scale.setTo(1.5,1.211);
               
        //Personagem - Menino
        player = game.add.sprite(800,0,'menino');
        game.physics.arcade.enable(player); 
        player.body.gravity.y = 1000;
        player.body.bounce.y = .3;
        player.body.collideWorldBounds = true;
        player.frame = 3;
        
        //Animação do personagem - Menino
        player.animations.add('frente', [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],5,true);

        //Balão de conversa
        balao = game.add.sprite(500,50,'balao');
        balao.scale.setTo(.6,.6);
        balao.visible = false;
        game.time.events.add(Phaser.Timer.SECOND * 2, funcaoBalao, this);
        
        //Texto de conversa
        texto = game.add.text(560,120,'Oi amiguinho');
        texto.fontSize = 25;
        texto.visible = false;       
        
        //Botão avançar        
        buttonAvancar = game.add.button(1200, 550, 'botao_avancar', botaoAvancar, this, 2, 1, 0);
        buttonAvancar.scale.setTo(.3,.4);
        buttonAvancar.onInputUp.add(botaoAvancar, this);
        buttonAvancar.visible = false;
        game.time.events.add(Phaser.Timer.SECOND * 5, botaoAvancar, this);   

        //Botão menu
        buttonMenu = game.add.button(85, 3, 'botao_menu', botao_menu, this, 2, 1, 0);      
        buttonMenu.scale.setTo(.4,.5);
        buttonMenu.onInputOver.add(botao_menu, this); 
        
        //Som
        var music = game.sound.add('tela1');
        music.loop = true;
        music.volume = 1;
        music.play();
        

    },

    update: function(){
        player.animations.play('frente');
    },

    startGame: function(){
        botaoAvancar();
    }

    
};

function funcaoBalao(){
    balao.visible = true;
    texto.visible = true;
}

function botaoAvancar() {
    console.log('botao_avancar', arguments);   
    if(quant == 0){
        texto.visible = false;            
        texto = game.add.text(560,120,'Vamos jogar?');        
        texto.fontSize = 25;
        buttonAvancar.visible = true;
        quant = 1; 
        game.time.events.add(Phaser.Timer.SECOND * 5, botaoAvancar, this);       
        
    }else if(quant == 1){
        next();
    }
}

function botao_menu(){
}


function next(){
    game.state.start('stage2');
}


