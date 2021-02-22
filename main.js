function setup(){

    canvas = createCanvas(480 , 450);
    canvas.center();

}

function start(){
    object = ml5.objectDetector('cocossd', model_load);
    document.getElementById("status").innerHTML = " Status : Detecting object";
}

function model_load(){
    console.log("MODEL LOADED");
    status = true; 
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw(){
    image(video, 0 , 0, 480, 350);
}