para = document.getElementsByClassName('para');
console.log(para);

for (let i = 0; i < para.length; i++) {
    para[i].style.color = 'red';
}

const btn = document.getElementById('btn');

btn.style.transform.rotate = 180+'deg';

let query = document.querySelector('.query');
console.log(query);