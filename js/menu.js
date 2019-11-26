var menuState = {
    create: function(){

        var txt = game.add.text(710,150,'ANIMALCARE',{font: '30px Arial', fill: '#fff'});

        var pressStart = game.add.text(640,250,'PRESS START',{font: '20px Arial', fill: '#fff'});
        txt.anchor.set(.5);

        game.add.tween(pressStart).to({y:250},1000).start();

        game.time.events.add(1000,function(){
            var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterKey.onDown.addOnce(this.startGame,this);
        },this);
    },

    startGame: function(){
        game.state.start('stage1');
    }
};