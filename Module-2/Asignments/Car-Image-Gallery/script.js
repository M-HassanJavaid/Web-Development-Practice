let image = document.getElementById('img');
let btn = document.getElementById('button');
let sources = ['./Media/img1.webp' , './Media/img2.jpg' , './Media/img3.jpg' , './Media/img4.jpeg' , './Media/img5.webp' ,
    './Media/img6.jpeg' , './Media/img7.jpeg' , './Media/img8.jpg' , './Media/img9.jpg' , './Media/img10.png' , 
    './Media/img11.webp' , './Media/img12.jpg' , './Media/img13.jpg' , './Media/img14.jpg' , './Media/img15.webp' ,
    './Media/img16.jpg' , './Media/img17.webp' , './Media/img18.webp' , './Media/img19.jpg' , './Media/img20.jpg'
]
let PreviousNumber; 

function ChangeImage() {
    let RandomNumber = Math.floor(Math.random() * sources.length);
    while (RandomNumber === PreviousNumber) {
        RandomNumber = Math.floor(Math.random() * sources.length);
    }
    PreviousNumber = RandomNumber;
    image.style.transform = 'translate(-100%)';
    setTimeout(() => {
        image.src = sources[RandomNumber];
    },1000);
    setTimeout(() => {
        image.style.transform = 'translate(0%)';
    }, 1000);
}
