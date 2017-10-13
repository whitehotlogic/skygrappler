var skygrappler = skygrappler || {};
 
//loading the game assets
skygrappler.Preload = function(){};
 
skygrappler.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'progressbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);
 
    this.load.setPreloadSprite(this.preloadBar);
 
    //load game assets
    this.load.spritesheet('player', 'assets/img/player.png', 35, 50, 2);
    //this.load.image('sky', 'assets/img/sky.png');
    this.load.image('clouds', 'assets/img/cloud.png');
    this.load.image('fire', 'assets/img/fire.png');

  },
  create: function() {
    this.state.start('Game');
  }
};