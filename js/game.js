//var game = new Phaser.Game(1920,722,Phaser.AUTO);
var game = new Phaser.Game(1366,625,Phaser.CANVAS);

    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('menu', menuState);
    game.state.add('stage1', stage1State);
    game.state.add('stage2', stage2State);
    game.state.add('stage3', stage3State);
    game.state.add('end', endState);
    game.state.start('boot');
