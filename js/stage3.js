var cachorro;
var stage3State = {
    create: function(){
        //Fundo
        var fundo = game.add.sprite(0,0,'bg3');
        fundo.scale.setTo(1.1,.9);

        //Personagem
        cachorro = game.add.sprite(900,250,'cachorro');
        cachorro.scale.setTo(1,1);
        cachorro.animations.add('frente', [0],3,false);
        cachorro.animations.add('frente', [1],3,false);

    },

    update: function(){
        cachorro.animations.play('frente');
    }    

};

