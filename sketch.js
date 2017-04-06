var x = 0;
var y = 0;
sizes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    
    redCircle();
    
    greenRect();
    
    lines();
    
    backgroundColor();
    
    yellowCircles(200);
}

function redCircle(){
    noStroke();
    fill(255,0,0);
    ellipse(mouseX,mouseY,100,100);
}

function greenRect(){
    fill(0,255,1);
    x = 200;
    y = y+= 3;
    rect(x,y,100,height);
}

function lines(){
    var i = 0;
    var yLine = 50;
    while(i<10){
        stroke(255);
        line(100,yLine,500,50);
        i++;
        yLine += 50;
    }
}

function backgroundColor(){
    if(mouseIsPressed && mouseY < 200){
        background(0,0,255);
    }
    else if(mouseIsPressed && mouseY >= 200){
        background(255,255,0);
    }
    
    if(y>height){
        y = 0 -height;
    }
}

function yellowCircles(yRow){
    var xCircle = 40;
    for(var i =0; i<10; i++){
        noStroke();
        fill(255,255,0);
        ellipse(xCircle, yRow, sizes[i], sizes[i]);
        xCircle += 50;
    }
}