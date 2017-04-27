// Create our main statr that will contain the game
var mainStage = { 
 preload: function() {
 //this function will be executed at the beginning 
     //that's where we load the images and sound
     
     //load the bird
     game.load.image('bird', 'assets/bird.png');
 },
    create: function() {
    // this function is called after the perload 
    // here we setup the game
    
        // change the background colour to blue 
        game.state.backgroundColor = '#71c5cf';
        
        //set the physics 
        game.physics.startsystem(phaser.physics.arcade);
        
        //bird
        this.bird = game.add.sprite(100,245, 'bird');
        
        
        game.physics.arcade.enable(this.bird);
        
        //add gravity 
        this.bird.body.gravity.y =1000;
        
        //control 
        
        var spaceBar = game.input.keyboard.addkey(             Phaser.keyboard.SPACEBAR);
        spaceBar.ondown.add(this.jump, this)
    }, 
    
    update:function() { 
    //this function is called 60 times per second 
    //it contains the game logic    
    
        
        //call the restaertgame 
        
        if (this.bird.y <0 || this.bird.y >490)
            this.restartGame(); 
    },
    
    jump:function() {
        //add a vertical velocity 
        this.bird.body.velocity.y =-350;
    },
    
    
    //restart game 
    restartGame: function() {
    game.state.start('main');
    ], 
};

//phaser
var game = new phaser. game (400,490)

game.state.add('main', mainState);

game.state.start('main');
