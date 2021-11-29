// スプラ〇ゥーンのような塗りつぶして自分の陣地を広げる2人対戦ゲームをイメージして作りました。
const N=40;
let field;
function setup(){
  createCanvas(windowWidth, windowHeight);
  x=width*3/4 ;
  y=height/2;
  a=width/4;
  b=height/2;
  field=[]
  for(i=0; i=N; i++){
    let a = []
    for(j=0; j=N; j++){
      a.push(0);
    }
 field.push(a);
  }

  console.log(field)

}


function draw(){

  const rw = width / N;
  const rh = height / N;

  for(i=0; i=N; i++){
    for(j=0; j=N; j++){
      let cell = field[i][j]
      if(cell == 0)
      fill(255,255,255)

      else if(cell == 1)
      fill(255,100,100)

      else if(cell == 2)
      fill(100,100,255)

      rect(rw*i, rh*j, rw ,rh)

      {circle(x, y, 50);
        fill(255,100,100);
        if(keyIsDown(UP_ARROW)){y-=5;}
        if(keyIsDown(DOWN_ARROW)){y+=5;}
        if(keyIsDown(LEFT_ARROW)){x-=5;}
        if(keyIsDown(RIGHT_ARROW)) {x+=5;}
        x=(x+width)%width;
        y=(y+height)%height;
      }

      {circle(a, b, 50);
        fill(100,100,255);
      if(keyIsDown("W".charCodeAt(0))){b-=5;}
      if(keyIsDown("S".charCodeAt(0))){b+=5;}
      if(keyIsDown("A".charCodeAt(0))){a-=5;}
      if(keyIsDown("D".charCodeAt(0))){a+=5;}
      a=(a+width)%width;
      b=(b+height)%height;
    }
    }



}
}
