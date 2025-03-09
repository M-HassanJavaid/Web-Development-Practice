function RandomColor() {
    let color = '#'
    let letters = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
        color = color + letters[Math.floor(Math.random() * 16)];
    }
    return color
}

let box = document.querySelector('.box');

box.addEventListener('click' , ()=>{
    box.style.backgroundColor = RandomColor()
})