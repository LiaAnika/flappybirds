// Create our main statr that will contain the game
var mainStage = { 
 preload: function() {
 //this function will be executed at the beginning 
     //that's where we load the images and sound
     
     //load the bird
     game.load.image('bird', 'assets/bird.png');
     game.load.image('pipe', 'assets/pipe.png');
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
        
        //create an empty group 
    this.pipes = game.add.group();
        
        //timer
        this.timer = game.time.events.loop(1500, this.addRowofpipes,this); 
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
    },
        
        //add pipe 
        addOnepipe: function(x, y) {
            //create positions
            var pipe = game.add.sprite(x, y, 'pipe');
            
            //add pipe
            this.pipes.add(pipe);
            
            //enable the physics
            game.physics.arcade.enable(pipe);
            
            //add velocity to pipe
            pipe.body.velocity.x = -200;
            
            //kill pipe
            pipe.checkWorldBounds = true;
            pipe.checkWorldBounds=true;
        },
  
            //many pipes
            addRowofpipes: function() { 
                //randomly pick number 1-5 
                //this will hole the postions
                var holes = Math.floor(Math.random() * 5) +1;
                
                //add 6 pipes
                for(var i =0; i<8; i++)
                    if (i != hole&& i !=hole+1)
                        this.addOnepipe(400, i * 60 + 10); 
            }, 
};



//phaser
var game = new phaser. game (400,490)

game.state.add('main', mainState);

game.state.start('main');
