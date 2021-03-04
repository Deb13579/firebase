var ball;
var database;
var position;
function setup(){
    database = firebase.database();
     ee = loadImage("o/Hot Air Ballon-01.png")

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.addImage("e", ee)
    var ballPosition = database.ref('ball/position');
    ballPosition.on("value", readPosition, showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-50,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(50,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-50);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+50);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
      'x' : position.x+x,
      'y' : position.y+y
    })
    
}
function showError(){
    console.log("ERROR ALERT")
}
function readPosition(data){
   position = data.val()
   ball.x = position.x
   ball.y = position.y
}