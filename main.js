function preload(){

}
tintbg = ""
function setup(){
    canvas = createCanvas(640,480)
    canvas.position(110,250)
    video = createCapture(VIDEO)
    video.hide()
    
}

function draw(){
    image(video,0,0,640,480)
    tint(tintbg)
}

function take_snapshot(){
    save('student_name.png')
}

function applyfilter(){
    tintbg = document.getElementById("color").value
}