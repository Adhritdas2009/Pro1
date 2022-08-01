status1='';
video1='';
objects=[];
function preload(){

}

function setup(){
    canvas=createCanvas(400, 400)
    canvas.center();
}




function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML="Detecting Objects";
}


function modelLoaded(){
    console.log('The model has been loaded');
    status1=true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(video1, 0, 0, 400, 400)
    if(status1 !=''){
        objectDetector.detect(video, gotResult);
        document.getElementById('status').innerHTML="Objects Detected";
        document.getElementById('object1').innerHTML=objects.length;
        for(i=0; i<objects.length; i++){
        fill('red');
        t=objects[i].label;
        p=Math.floor(objects[i].confidence*100);
        a=t+" "+p+"%";
        text(a, objects[i].x, objects[i].y)
        noFill();
        stroke('red');
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
