// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

'use strict';

(function () {

  /* ==============================================
    Nico
    =============================================== */

    // $( 'a.menuClick' ).click(function( e ) {
    //     e.preventDefault();
    //     console.log( "transition" );
    //     $( "#image" ).removeClass( "fadeInLeftBig"  );
    //     $( "#image" ).addClass   ( "bounce" );
    //     var target = $( this ).attr( "href" );
    //     setTimeout(function(){
    //       window.location.href = target;
    //       console.log( target );
    //     }, 1000);
    //   });


   /* ==============================================
  	Testimonial Slider
  	=============================================== */

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    // $(window).bind('scroll', function() {
    //     var navHeight = $(window).height() - 60;
    //     if ($(window).scrollTop() > navHeight) {
    //         $('.navbar-default').addClass('on');
    //     } else {
    //         $('.navbar-default').removeClass('on');
    //     }
    // });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
      $('.navbar-default').addClass('on');
  	  $("#team").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#clients").owlCarousel({

  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();


// Navigation page suivante ou précédente avec les flèches
// gauche-droite du clavier.
Mousetrap.bind( 'left',  function(e) { navigate_prev_page(); });
Mousetrap.bind( 'right', function(e) { navigate_next_page(); });
function navigate_next_page() {
   var next_page = $( ".bouton-suiv" ).first().attr( "href" );
   // console.log( next_page );
   window.location.href = next_page;
}
function navigate_prev_page() {
   var prev_page = $( ".bouton-prec" ).first().attr( "href" );
   // console.log( prev_page );
   window.location.href = prev_page;
}


// Formulaire
var $contactForm = $( '#contact-form' );
$contactForm.submit( function(e) {
  e.preventDefault();
  var $form_status = $( '#form-status' );
  $form_status.removeClass( "hidden" );

  // Vérifie que tous les champs sont remplis
  var form_email_length = $( '#form-email' ).val().length;
  var form_nom_length = $( '#form-nom' ).val().length;
  var form_message_length = $( '#form-message' ).val().length;
  console.log( form_email_length );
  console.log( form_nom_length );
  console.log( form_message_length );
  if( form_email_length == 0 | form_nom_length == 0 | form_message_length == 0 ) {
    $form_status.html( '<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Veuillez remplir tous les champs <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span></div>' );
    return;
  }

  $.ajax({
    url: $( '#contact-form' ).attr( "action" ),
    method: 'POST',
    data: $( this ).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $form_status.html( '<div class="alert alert-info" role="alert">Envoi du message</div>' );
    },
    success: function(data) {
      $form_status.html( '<div class="alert alert-success" role="alert">Message envoyé, merci !</div>' );
    },
    error: function(err) {
      $form_status.html( '<div class="alert alert-danger" role="alert">Il y a eu une erreur !</div>' );
    }
  });
});

