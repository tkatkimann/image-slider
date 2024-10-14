/*aktiverer strict mode, som hjælper med at fange fejl tidligt og følger  de seneste javascript  konventationer*/
"use strict"; 

// Henter all HTML-elementer med klassen "slide"
const slidesElem = document.querySelectorAll(".slide");

//Henter venstre knap vha. deres ID attributten
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

//Definer variablen activesSlide og sætter den til 4
let activeSlide = 4;
//Udskriver startsværdien af variablen activeSlides
console.log(`Starting activeSlide with slide ${activeSlide}`);

//Tilføjer en event listener til højre knap, der aktiveres ved klik 
rightBtn.addEventListener('click', () => {
    //øger activeSlide variablen med 1
    activeSlide++;
    /*Hvis activeSlide variablen er større end antallet af slides, så sættes activeSlides tilbage til værdien 0 - altså første slide */
    if(activeSlide > slidesElem.length - 1){
        activeSlide = 0;
    }

    //Kalder på funktionen setActiveSlide for at opdqatere hvilken slide der vises som aktiv
    setActiveSlide();
    console.log(`Current activeSlide is, ${activeSlide}`);

});


//Tilføjer en event listener til venstre knap, der aktiveres ved klik 
leftBtn.addEventListener('click', () => {
    //mindser activeSlide variablen med 1
    activeSlide--;

    /*Hvis activeSlide variablen er mindre end 0, så sættes activeSlides tilbage længden af slidesElem minus 1 - fordi det er et array */
    if(activeSlide < 0 ){
        activeSlide = slidesElem.length -1;
    }

    //Kalder på funktionen setActiveSlide for at opdqatere hvilken slide der vises som aktiv
    setActiveSlide();
    console.log(`Current activeSlide is, ${activeSlide}`);

});

//Denne funktion fjerner klasse attributen'active' fra alle slides og tilføjer den til den slide som er aktiv

function setActiveSlide(){
    //Fjerner 'active' klasse attributten fra alle slides 
    slidesElem.forEach((elem) => elem.classList.remove('active'));
    /*Tilføjer 'active' klasse attributten til den slide, som svarer til  værdien af 'activeSlide', så den vises*/
    slidesElem[activeSlide].classList.add('active');
}



