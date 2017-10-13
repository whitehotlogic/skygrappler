var skygrappler = skygrappler || {};
 
skygrappler.Game = function(){};
 
skygrappler.Game.prototype = {

    preload: function() {
        this.game.time.advancedTiming = true;
    },

    create: function() {

        //create player
        this.player = this.game.add.sprite(this.game.width/2, this.game.height/3, 'player');

        //set up fire and clouds
        this.game.world.setBounds(0, 0, 12000, this.game.height);
        this.clouds = this.add.tileSprite(0,-200,this.game.world.width,330,'clouds');
        this.fire = this.add.tileSprite(0,this.game.height-100,this.game.world.width,100,'fire');



        //enable physics on the player, clouds, fire
        this.game.physics.arcade.enable(this.player);
        this.game.physics.arcade.enable(this.clouds);
        this.game.physics.arcade.enable(this.fire);

        //the camera will follow the player in the world
        this.game.camera.follow(this.player);

        //player gravity
        this.player.body.gravity.y = 500;

        //start the player moving
        this.player.body.velocity.x = 300;

        //do grappling
        this.toggleGappleHold = false;
        //this.player.anchor.setTo(.30);
        this.player.pivot.x = 100;


        // add keyboard events
        var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.grappleHold, this);
        leftKey.onDown.add(this.grappleThrowLeft, this);
        rightKey.onDown.add(this.grappleThrowRight, this);

        //start off grappled
        this.grappledLeft = true;
        this.grappledRight = false;


        //make player have upper bounds of clouds
        this.player.body.collideWorldBounds = true;
        //this.clouds.body.setSize(this.game.world.width,800);
        this.player.body.immovable = true;
        this.player.body.bounce.set(1);

        this.clouds.body.immovable = true;


    },

    update: function() {

        // player can collide with fire
        this.game.physics.arcade.collide(this.player, this.fire, this.gameOver, null, this);
        //this.game.physics.arcade.collide(this.player, this.clouds);

        //The game world is infinite in the x-direction, so we wrap around.
        //We subtract padding so the player will remain in the middle of the screen when
        //wrapping, rather than going to the end of the screen first.
        this.game.world.wrap(this.player, -(this.game.width/2), false, true, false);


        //

        this.player.rotation -= 0.05;

        if (!this.toggleGappleHold) {
            /*
            this.player.rotation = 0;
            if (this.player.body.velocity >= 0) {
                this.player.body.velocity.x -= .50;
            }
            */
        } else {

            /*
            if (this.player.rotation <= 0.50) {
                this.toggleGappleHold = false;
            }*/
        }



    },


    render: function() {
        this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
    },

    grappleThrowLeft: function() {

        if (this.grappledRight) {
            this.player.body.velocity.y = -300;
            this.grappledLeft = true;
            this.grappledRight = false;
        }
    },

    grappleThrowRight: function() {

        if (this.grappledLeft) {
            this.player.body.velocity.y = -300;
            this.grappledLeft = false;
            this.grappledRight = true;
        }

    },

    grappleHold: function() { // handle spacebar

        if (this.toggleGappleHold) {

            //this.player.body.velocity.y = -250;

            //this.player.pivot.x = 200;
            //this.player.pivot.y = 200;

            this.toggleGappleHold = false;
        } else {


            this.toggleGappleHold = true;;
        }
    },

    gameOver: function() {
        this.game.state.start('Game');
    }

};

