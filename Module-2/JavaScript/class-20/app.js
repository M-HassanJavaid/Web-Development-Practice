let box = document.getElementsByClassName('box')[0];

console.log(box);

function InreaseSixe() {
    box.style.width = '500px';
    setTimeout(() => {
        box.style.width = '400px';
    }, 1000);
}
