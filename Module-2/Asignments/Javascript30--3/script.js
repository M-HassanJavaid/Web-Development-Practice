let gapInput = document.querySelector('#padding');
const root = document.documentElement;

gapInput.addEventListener( 'input' , ()=>{
    root.style.setProperty('--gap', gapInput.value + 'px');
});

let colorInput = document.querySelector('#color');
colorInput.addEventListener('input', ()=>{
    root.style.setProperty('--color', colorInput.value);
});

let blurInput = document.querySelector('#Blur');
blurInput.addEventListener('input', ()=>{
    root.style.setProperty('--blur', blurInput.value + 'px');
});
