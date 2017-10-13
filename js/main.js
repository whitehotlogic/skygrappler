var skygrappler = skygrappler || {};
 
skygrappler.game = new Phaser.Game(1024, 576, Phaser.CANVAS, 'skygrappler');

// WELCOME to skygrappler
     // score is based on number of successful grapples before death
     // side-scroller speeds up every grapple by 3%
     // grapples don't hold unless spacebar is pressed
     // bottom of world kills player
     // bonus are clocks. clocks slow the world down.);

skygrappler.game.state.add('Boot', skygrappler.Boot);
skygrappler.game.state.add('Preload', skygrappler.Preload);
skygrappler.game.state.add('Game', skygrappler.Game);
 
skygrappler.game.state.start('Boot');