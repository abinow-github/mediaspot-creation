

//Carousel functions
/////first slider
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1
            }
        }]
    });
  });




document.addEventListener("DOMContentLoaded", function() {
    var htmlTag = document.querySelector('html');
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var nav2dMenu = document.querySelectorAll('.navbar-nav .nav-2-dropdown-menu-div');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('mouseover', function() {
            htmlTag.style.overflow = 'hidden';
        });
        nav2dMenu[i].addEventListener('mouseover', function() {
            htmlTag.style.overflow = 'hidden';
        });

        navLinks[i].addEventListener('mouseout', function() {
            htmlTag.style.overflow = 'visible';
        });
        nav2dMenu[i].addEventListener('mouseout', function() {
            htmlTag.style.overflow = 'visible';
        });
    }
});


/////////wishlist button click
$(".button").click(function() {
    if ( $(this).hasClass( "deactivate" ) ) {
      $(this).removeClass("deactivate")
    }
    if ( $(this).hasClass( "active" ) ) {
      $(this).addClass("deactivate")
    }
    $(this).toggleClass("animate");
    $(this).toggleClass("active");
    $(this).toggleClass("inactive");
  });