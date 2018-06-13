'use strict';

const doc = document;

//slider


// terms-and-conditions popup
let termsLink = doc.querySelector('.terms-and-conditions__link'),
    terms = doc.querySelector('.terms-and-conditions'),
    closeLink = doc.querySelector('.closeLink'),
    termsText = doc.querySelector('.terms-and-conditions-text'),
    ritualStat = doc.querySelector('.ritual-stat');


termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    terms.style.backgroundColor = "#58595b";
    terms.style.marginBottom = "0";
    closeLink.style.display = "inline-flex";
    termsText.style.display = 'block';
    ritualStat.style.marginTop = "5%";
});

closeLink.addEventListener('click', (e) => {
    e.preventDefault();
    termsText.style.display = 'none';
    closeLink.style.display = "none";
    terms.style.marginBottom = "5%";
    terms.style.backgroundColor = "#242424";

})