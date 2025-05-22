const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'yellow';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 25;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown',(e)=>{
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mouseup',()=>{
    isDrawing = false;
});



canvas.addEventListener('mousemove' , (e)=>{
    if (isDrawing === false) return

    ctx.beginPath()
    ctx.moveTo(lastX , lastY)
    ctx.lineTo(e.offsetX , e.offsetY)
    ctx.stroke()
    lastX = e.offsetX;
    lastY = e.offsetY;
});
