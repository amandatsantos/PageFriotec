
/* const images = [
    { 'id':'1', 'url': './image/logo1.jpg'},
    { 'id':'2', 'url': './image/logo1.jpg'}
]
const container = document.querySelector('.carrosel-servico')

const loadImages = (images, container) => {
     images.forEach(image => {  container.innerHTML = `<div> class=`
         
     });
}
loadImages(images, container);  */

const imgs = document.getElementById('img')
const img = document.querySelectorAll("#img img")

let idx = 0;

function carrosel() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

setInterval(carrosel, 1800);