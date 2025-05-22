let ImgCollection = [
    'https://hips.hearstapps.com/hmg-prod/images/14bugatti-divo-99leadgallery-1535035005.jpg?crop=0.941xw:0.864xh;0.0423xw,0.136xh&resize=2048:*',
    'https://i.pinimg.com/736x/6f/87/84/6f8784f5fadc6eca77e4c98983c506a2.jpg',
    'https://imageio.forbes.com/specials-images/imageserve/6064c6802c761b99a89d1f21/0x0.jpg?format=jpg&crop=2375,1336,x0,y120,safe&height=900&width=1600&fit=bounds'
]

function ChangeImg () {
    let img = document.getElementById('img');
    img.addEventListener('mouseenter' , ()=>{
        let randomCar = ImgCollection[Math.floor(Math.random() * ImgCollection.length)];
        img.src = randomCar
    });
}



ChangeImg()