var skygrappler = skygrappler || {};
 
skygrappler.Boot = function(){};
 
//setting game configuration and loading the assets for the loading screen
skygrappler.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen
    this.load.image('progressbar', 'assets/img/progress-bar.png');
  },
  create: function() {
    //the game will have a sky blue background
    this.game.stage.backgroundColor = '#5555ff';
 
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
 
    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  
    this.state.start('Preload');
  }
};