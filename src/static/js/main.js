'use strict';

const doc = document;

// slider

$('.content-slider')
.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.content-slider-inner'
});

$('.content-slider-inner')
.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.content-slider',
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
});

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