const sliderImg = document.querySelector("#slider img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const urlImg = [
    "./assets/img/house2.jpg",
    "./assets/img/house3.jpg",
    "./assets/img/house4.jpg",
    "./assets/img/house5.jpg"
];

//1ere etape je declare un index
let i = 0;
sliderImg.src = urlImg[i];
next.addEventListener(
    "click",
    function () {
        console.log(i);
        //etape 3 : limité index à la taille de mon tableau -1
        if (i === urlImg.length - 1) {
            i = 0;
            sliderImg.src = urlImg[i];
        } else {
            //je dois réaffecter scr avec la nouvelle valeur de index
            //2eme etape : j'incrémente mon index
            i++;
            sliderImg.src = urlImg[i];
        }
    }
)

prev.addEventListener(
    "click",
    function () {
        console.log(i);
        //etape 3 : limité index à la taille de mon tableau -1
        if (i === 0) {
            i = urlImg.length - 1;
            sliderImg.src = urlImg[i];
        } else {
            //je dois réaffecter scr avec la nouvelle valeur de index
            //2eme etape : j'incrémente mon index
            i--;
            sliderImg.src = urlImg[i];
        }
    }
)
setInterval(
    function () {
        console.log(i);
        //etape 3 : limité index à la taille de mon tableau -1
        if (i === urlImg.length - 1) {
            i = 0;
            sliderImg.src = urlImg[i];
        } else {
            //je dois réaffecter scr avec la nouvelle valeur de index
            //2eme etape : j'incrémente mon index
            i++;
            sliderImg.src = urlImg[i];
        }
    },
    4000 //ms
    )