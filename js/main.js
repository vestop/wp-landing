$(function () {


    $('.person-slider').slick({ //+
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<img class="slider__arrows slider__arrows-right" src="images/right-arrow.svg" alt="">',
        prevArrow: '<img class="slider__arrows slider__arrows-left" src="images/left-arrow.svg" alt="">',
        asNavFor: '.person-central',
    });
    $('.person-central').slick({ //+
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.person-slider',
        focusOnSelect: true,
    });

    $(".go").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        } 
    });

    //----------------------------------------Mobile menu

    const body = document.getElementById("body");

    var menuElements = document.getElementsByClassName("navigation__link");

    var navIcon = document.getElementById("navIcon")

    var navBar = document.getElementById("navBar")

    var logo = document.getElementById("logo")

    const menuBtn = document.getElementById("toggle-navigation");

    var navList = document.getElementById("navigation-list");

    window.onscroll = function () {
        if (window.innerWidth > 681 && window.pageYOffset > 0) {
            body.classList.add('navigation-closed')
            body.classList.add('navigation-down')
        } else if (window.innerWidth > 681 && window.pageYOffset == 0) {
            body.classList.remove('navigation-closed')
            body.classList.remove('navigation-down')
        }
    };


    if (window.innerWidth < 681) {
        body.classList.add('navigation-closed')
        window.onscroll = function (){
            body.classList.add('navigation-closed')
            navIcon.classList.remove("is-activeCross")
        }
        navBar.classList.add("animated", "slideInDown")
        logo.classList.remove("animated", "slideInLeft")
        navList.classList.remove("animated", "slideInRight")
    }


    

    menuBtn.addEventListener("click", function () {
        body.classList.toggle("navigation-closed");
    });

    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].addEventListener("click", function () {
            body.classList.add("navigation-closed");
            navIcon.classList.remove("is-activeCross")
        });
    }


    if (window.innerWidth < 681) {
        $(".nav-bar__toggle-navigation__icon").click(function () {
            $(this).toggleClass("is-activeCross");
        });

        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.add("navColor")
        }
    }


    new WOW().init();

});