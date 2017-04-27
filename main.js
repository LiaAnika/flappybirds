// Create our main statr that will contain the game
var mainStage = { 
 preload: function() {
 //this function will be executed at the beginning 
     //that's where we load the images and sound
 },
    create: function() {
    // this function is called after the perload 
        // here we setup the game
    
    }, 
    
    update:function() { 
    //this function is called 60 times per second 
    //it contains the game logic    
    
    },
};

//phaser
var game = new phaser. game (400,490)

game.state.add('main', mainState);

game.state.start('main');