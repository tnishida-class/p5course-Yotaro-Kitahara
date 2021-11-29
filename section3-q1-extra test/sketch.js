// スプラ〇ゥーンのような塗りつぶして自分の陣地を広げる2人対戦ゲームをイメージして作りました。
const N=20;
let field;
let x,y,a,b;
const limit = 60; // 制限時間[秒]
let startTime;
let state;
let arr ;
let scores ;
function setup(){

  createCanvas(windowWidth, windowHeight);
  x=width*3/4 ;
  y=height/2;
  a=width/4;
  b=height/2;

  textAlign(CENTER, CENTER);
textSize(32);
state = 0;
  field=[];
  for(i=0; i<N; i++){
    arr=[]
    for(j=0; j<N; j++){
      arr.push(0);
    }
 field.push(arr);
  }

  console.log(field)

}


function draw(){



  const rw = width / N;
  const rh = height / N;

  for(i=0; i<N; i++){
    for(j=0; j<N; j++){a
      let cell = field[i][j]
      if(cell == 0)
      fill(255,255,255)

      else if(cell == 1)
      fill(255,100,100)

      else if(cell == -1)
      fill(100,255,100)

      rect(rw*i, rh*j, rw ,rh)

  }
}
let ri = floor(N * x / width);
let rj = floor(N * y / height);
field[ri][rj] = -1;

let bi = floor(N * a / width);
let bj = floor(N * b / height);
field[bi][bj] = 1;


{circle(x, y, 40);
  fill(0,0,0);
  if(keyIsDown(UP_ARROW)){y-=5;}
  if(keyIsDown(DOWN_ARROW)){y+=5;}
  if(keyIsDown(LEFT_ARROW)){x-=5;}
  if(keyIsDown(RIGHT_ARROW)) {x+=5;}
  x=(x+width)%width;
  y=(y+height)%height;
}

{circle(a, b, 40);
  fill(90,90,255);
if(keyIsDown("W".charCodeAt(0))){b-=5;}
if(keyIsDown("S".charCodeAt(0))){b+=5;}
if(keyIsDown("A".charCodeAt(0))){a-=5;}
if(keyIsDown("D".charCodeAt(0))){a+=5;}
a=(a+width)%width;
b=(b+height)%height;}

let sum= 0
scores=[]
for(let i=0 ; i < field.length ; i++){
  for(let j=0 ; j< arr.length ; j++){
    sum+= field[i][j]
  }


}


if (state == 0) { // ゲーム開始前
   text("Click to start", width / 2, height / 2);
 } else if (state == 1) { // ゲーム中
   let ellapsedTime = (millis() - startTime) / 1000;
   if (ellapsedTime > limit) {
     state = 2;
   } else {
     let remainingTime = limit - ellapsedTime;
     text(floor(remainingTime), width / 2, height / 2);
   }
 } else if (state == 2) {
   if(sum>0){
   text("Red wins!", width / 2, height / 2);
   }
   else if (sum<0) {
     text("Green wins!", width / 2, height / 2);
   }
   else if (sum==0) {
      text("Draw...", width / 2, height / 2);
   }
 }
}

function mouseClicked() {
  if (state == 0) {
    startTime = millis();
    state = 1;
  }
}
