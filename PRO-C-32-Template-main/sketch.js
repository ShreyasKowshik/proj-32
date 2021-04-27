const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;


    function preload() {
        backgroundImg = loadImage("sprites/bg.png");
        getbackgroundImage();
    }

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    async function getBackgroundImage(){
        var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(responce);
    var responceJSON = responce.json();
    console.log(responceJSON);
    var date_time = responceJSON.datetime;
    console.log(date_time);
    var hour = date_time.slice(11,13);
    console.log(hour);
    if(hour >= 06 && hour < 12){
        bg = "sunrise1.png";
        }
        else{
            bg = "ssunrise2.jpg";
        }
        backgroundImage = loadImage(bg);
    
    if(hour >= 06 && hour < 12){
        bg = "sunrise3.png";
        }
        else{
            bg = "sunrise4.jpg";
        }
        backgroundImage = loadImage(bg);
    
    if(hour >= 06 && hour < 12){
        bg = "sunrise5.png";
        }
        else{
            bg = "sunrise6.jpg";
        }
        backgroundImage = loadImage(bg);
    
    if(hour >= 06 && hour < 12){
        bg = "sunset7.png";
        }
        else{
            bg = "sunset8.jpg";
        }
        backgroundImage = loadImage(bg);
    
    if(hour >= 06 && hour < 12){
        bg = "sunset9.png";
        }
        else{
            bg = "sunset10.jpg";
        }
        backgroundImage = loadImage(bg);
    
    if(hour >= 06 && hour < 12){
        bg = "sunset11.png";
        }
        else{
            bg = "sunset12.jpg";
        }
        backgroundImage = loadImage(bg);
    }


    Engine.update(engine);
}


