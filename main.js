song=" "
song2=" "
s1ss=" "
s2ss=" "
function preload(){
    song=loadSound("music.mp3")
    song2=loadSound("Lostboy.mp3")
}
rwx=0
rwy=0
lwx=0
lwy=0
srw=0
slw=0
function setup(){
    canvas=createCanvas(600,600)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("postnetisinitialized")
}
function gotPoses(results){
    if(results.length>0){
        srw=results[0].pose.keypoints[10].score
        slw=results[0].pose.keypoints[9].score
        rwx=results[0].pose.rightWrist.x
        rwy=results[0].pose.rightWrist.y
        lwx=results[0].pose.leftWrist.x
        lwy=results[0].pose.leftWrist.y
    }
}
function draw(){
    image(video,0,0,600,600)
    fill("blue")
    stroke("white")
    if(srw>0.2){
        circle(rwx,rwy,20)
        song2.stop()
        if(s1ss==false){
            song.play()
        }
    }
    if(slw>0.2){
        circle(rwx,rwy,20)
        song.stop()
        if(s2ss==false){
            song2.play()
        }
    }
}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}