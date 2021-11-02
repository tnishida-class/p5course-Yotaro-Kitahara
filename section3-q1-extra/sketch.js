// スプラ〇ゥーンのような塗りつぶして自分の陣地を広げる2人対戦ゲームをイメージして作りました。

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=width*3/4 ;
  y=height/2;
  a=width/4;
  b=height/2;


}

function draw(){

{circle(x, y, 100);
  fill(255,100,100);
  if(keyIsDown(UP_ARROW)){y-=5;}
  if(keyIsDown(DOWN_ARROW)){y+=5;}
  if(keyIsDown(LEFT_ARROW)){x-=5;}
  if(keyIsDown(RIGHT_ARROW)) {x+=5;}
  x=(x+width)%width;
  y=(y+height)%height;
}

{circle(a, b, 100);
  fill(100,100,255);
if(keyIsDown("W".charCodeAt(0))){b-=5;}
if(keyIsDown("S".charCodeAt(0))){b+=5;}
if(keyIsDown("A".charCodeAt(0))){a-=5;}
if(keyIsDown("D".charCodeAt(0))){a+=5;}
a=(a+width)%width;
b=(b+height)%height;

}
}
