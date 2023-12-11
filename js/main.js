// Ejecutaremos una vez cargado el DOM

$(document).ready(function() {
    // Cambio de header o nuestra barra de menus de tramsparente a blanca.
    $(window).on('scroll', function() {                     /**Seleccionamos el evento  */
        let posicion = $('#pr').offset();                   /**VAriable para saber la posicion. Nos da la posicion donde se encuentra */
        if ($(window).scrollTop() >= posicion.top) {
            $('header').removeClass('transparente');        /**Cogemos el header y quitamos su clase. */
        } else {
            $('header').addClass('transparente');
        }

    })
    // Accionamiento del menú lateral
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
    
    // Smooth scroll para transicciones en la misma pagina
    $('a').on('click', function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})