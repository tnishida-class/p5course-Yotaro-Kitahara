// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
//  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if ((i + j)%2==1) {
        fill(100,100,100);
      } else {
        noFill();

      }
      rect(size*i, size*j, size, size);

if ((i+j)%2==1&& j<3) {
  fill(255,0,0);
}
else if ((i+j)%2==1&& j<5) {
  noFill();
  noStroke();
}
else if ((i+j)%2==1&& j<8) {
  fill(0,0,0);
}
else if ((i+j)%2==0) {
  noFill();
  noStroke();

}
circle(size*(i+1/2), size*(j+1/2), size*4/5);
      }
        }
  }
