var canvas=document.getElementById("canvas")
var chalk=canvas.getContext("2d")

if(screen.width<768){
  canvas.width=screen.width-30;
  
}

window.addEventListener('mouseup', mouseup_action);
window.addEventListener('mousedown', mousedown_action);
window.addEventListener('mousemove', mousemove_action);
window.addEventListener('touchstart',touchstart_action);
window.addEventListener('touchmove',touchmove_action);

var tracker=0;

function mouseup_action(){
  tracker=0;
}
function mousedown_action(){
  tracker=1;
}

function mousemove_action(event){
  console.log(event)

  startX= event.clientX-canvas.offsetLeft;
  startY= event.clientY-canvas.offsetTop
  if(tracker==1){
    chalk.beginPath();
    chalk.lineWidth=3;
    chalk.strokeStyle="white"
    chalk.moveTo(startX,startY);
    chalk.lineTo(endX,endY);
    chalk.stroke();
  }
  endX=startX;
  endY=startY;

}
function touchmove_action(event){
  console.log(event)
  startX= event.touches[0].clientX-canvas.offsetLeft;
  startY= event.touches[0].clientY-canvas.offsetTop
 
    chalk.beginPath();
    chalk.lineWidth=3;
    chalk.strokeStyle="white"
    chalk.moveTo(startX,startY);
    chalk.lineTo(endX,endY);
    chalk.stroke();
  
  endX=startX;
  endY=startY;
}
function touchstart_action(event){
  startX= event.touches[0].clientX-canvas.offsetLeft;
  startY= event.touches[0].clientY-canvas.offsetTop
 
}