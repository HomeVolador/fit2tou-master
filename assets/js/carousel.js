
// Creamos las variables
let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
// elementos slides
let slides = document.querySelectorAll('.carousel .slide');
let images = document.querySelectorAll('.carousel .slide img');
let rightArrow = document.querySelector('.rigth-arrow');
let leftArrow = document.querySelector('.left-arrow');
let counter = 0;                        //Variable que contara la imagenes.


// Cuando se llame a la funcion cargara las imagenes
function loadSlides(){
    
    carousel.style.height = '90vh';
    let heightCarousel = carousel.offsetHeight; 

    for (i=0; i < images.length; i++) {
        if (images[i].offsetHeight < heightCarousel) {
            heightCarousel = images[i].offsetHeight;
        }
    }

    carousel.style.height = heightCarousel + 'px';

    // Nos despalazara las imagenes
    for (i=0; i < slides.length; i++){
         slides[i].style.left = carousel.offsetWidth * -i + 'px'; //Las desplazara en negativo a la izquierda el ancho del carousel oofsetwidth
        }
    }

// Abrimos el modal y cuando se ejecute este bloqueado
function openModal() {
    overlay.style.display='block';
    carousel.style.display='block';
    loadSlides();
}
function closeModal(){
    overlay.style.display='none';
    carousel.style.display='none';
}
// Pase a la derecha
// Modificamos la propiedad left y lo que hacemos es sumarle el ancho offsetlets le sumamos el ancho del carrousel.
function nextSlide(){
    updateArrowsState(1)
    for (i=0; i < slides.length; i++){
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px'; 
       }
}
function prevSlide(){
    updateArrowsState(-1)
    for (i=0; i < slides.length; i++){
        slides[i].style.left = slides[i].offsetLeft - carousel.offsetWidth + 'px'; 
       }
}

function updateArrowsState(e) {
    counter += e;
    if (counter !== 0) {
        leftArrow.style.display = 'flex';
    } else {
        leftArrow.style.display = 'none';
    }
    if (counter === slides.length - 1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'flex';
    }
    rightArrow.style.pointerEvents = 'none';
    leftArrow.style.pointerEvents = 'none';

    setTimeout(() => {
        rightArrow.style.pointerEvents = 'auto';
        leftArrow.style.pointerEvents = 'auto';
    }, 900);
}

