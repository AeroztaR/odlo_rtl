'use strict';

const doc = document;

//slider
let sliderImages = doc.querySelectorAll('.content-slider__img'),
    arrowRight = doc.querySelector('.arrowRight'),
    arrowLeft = doc.querySelector('.arrowLeft'),
    miniImages = doc.querySelectorAll('.content-slider-inner__item img'),
    current = 0;

function reset(){
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    current--;
}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowLeft.addEventListener('click', () =>{
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', () =>{
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

miniImages.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    sliderImages[current].src = e.target.src;
}

startSlide();

// swipe




// terms-and-conditions popup
let termsLink = doc.querySelector('.terms-and-conditions__link'),
    terms = doc.querySelector('.terms-and-conditions'),
    closeLink = doc.querySelector('.closeLink'),
    termsText = doc.querySelector('.terms-and-conditions-text'),
    ritualStat = doc.querySelector('.ritual-stat');

termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    termsText.classList.toggle('visible');
    terms.style.backgroundColor = "#58595b";
    terms.style.marginBottom = "0";
    closeLink.style.display = "inline-flex";
    ritualStat.style.marginTop = "5%";
});

closeLink.addEventListener('click', (e) => {
    e.preventDefault();
    termsText.classList.toggle('visible');
    closeLink.style.display = "none";
    terms.style.marginBottom = "5%";
    terms.style.backgroundColor = "#242424";
});