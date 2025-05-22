let pressed = [];
let secretCode = prompt('write a secret code!');
alert('now write your secret code again and see magic');
window.addEventListener('keydown' , (e)=>{
    pressed.push(e.key)
    if (pressed.length === secretCode.length + 1) { pressed.splice(0 , 1) };
    console.log(pressed);
    if (pressed.join('').toLocaleLowerCase() === secretCode.toLocaleLowerCase()) {
        console.log('Math has Found');
        cornify_add();
    }

});

