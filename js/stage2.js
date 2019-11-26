var escolha,balao2,texto2;
var stage2State = {
    create: function(){
       
        //Fundo
        var fundo = game.add.sprite(0,0,'bg2');
        fundo.scale.setTo(1.5,1.2);

        //Personagem - Menino
        player = game.add.sprite(1000,0,'menino');
        game.physics.arcade.enable(player); 
        player.body.gravity.y = 1000;
        player.body.bounce.y = .3;
        player.body.collideWorldBounds = true;
        player.frame = 3;

        //Animação do personagem - Menino
       // player.animations.add('frente', [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],5,true);
        movimento1();
        game.time.events.add(Phaser.Timer.SECOND * 3, movimento2, this);
        

        function movimento1(){
            player.animations.add('frente', [0],5,false);
        }
        function movimento2(){
            player.animations.add('frente', [2],5,false);
        }

        //Animais
        cachorro = game.add.sprite(200,460,'cachorro');
        cachorro.scale.setTo(.5,.5);
        cachorro.animations.add('frente', [0],5,true);

        gato = game.add.sprite(380,460,'gato');
        gato.scale.setTo(.5,.5);
        gato.animations.add('frente', [0],5,true);

        coelho = game.add.sprite(550,430,'coelho');
        coelho.scale.setTo(.5,.5);
        coelho.animations.add('frente', [0],5,true);

        papagaio = game.add.sprite(700,460,'papagaio');
        papagaio.scale.setTo(.5,.5);
        papagaio.animations.add('frente', [0],5,true);

        macaco = game.add.sprite(850,460,'macaco');
        macaco.scale.setTo(.5,.5);
        macaco.animations.add('frente', [0],5,true);

        //Balão de conversa
        balao2 = game.add.sprite(700,50,'balao');
        balao2.scale.setTo(.6,.6);
        balao2.visible = true;
        game.time.events.add(Phaser.Timer.SECOND * 1, funcaoBalao, this);
        
        //Texto de conversa
        texto2 = game.add.text(735,120,'Escolha um animal:');
        texto2.fontSize = 25;
        game.time.events.add(Phaser.Timer.SECOND * 3, conversa, this);      

        
    },

    update: function(){
        player.animations.play('frente');
    },

    startGame: function(){
        game.state.start('stage2');
    }

    
};

function conversa(){
    texto2.visible = false;            
    texto2 = game.add.text(750,120,'Ok vamos la!');        
    texto2.fontSize = 25;
}


