noseX=0;
noseY=0;
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    webcam = createCapture(VIDEO);
    webcam.size(550,500);
    webcam.position(160,150)

    poseNet = ml5.poseNet(webcam,modelLoaded);
    poseNet.on('pose',gotPoses);

    canvas =  createCanvas(500,550);
    canvas.position(800,150);
}

function draw(){
    background("#6699ff");
    textSize(100);
    fill("#ffffff");
    text('PUSHKAL',100,100);
}

function modelLoaded() {
    console.log("poseNet is Initializing");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX =results[0].nose.pose.x;
        noseY = results[0].nose.pose.y;

        leftWrist = results[0].leftWrist.pose.x;
        rightWrist = results[0].rightWrist.pose.x;

        difference = floor(leftWrist-rightWrist);
        document.getElementById("font_size").innerHTML = "Font size = "+difference;
    }
}