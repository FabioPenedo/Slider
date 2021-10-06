const qS = (el)=>document.querySelector(el);
const qSa = (el)=>document.querySelectorAll(el);
let totalSlides = qSa('.slider--item').length;
let currentSlide = 0;


qS('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
qS('.slider--controls').style.height = `${qS('.slider').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderWidth = qS('.slider--item').clientWidth
    let newMargin = (currentSlide * sliderWidth);
    qS('.slider--width').style.marginLeft = `-${newMargin}px`;
}
setInterval(() => {
    goNext()
}, 5000);


