$('#contactIcon').click(function() {
    $('#contactForm').css("display", "block");
    $('#contactIcon').css("display", "none");
});

$('#closeForm').click(function() {
    console.log('hello there');
    $('#contactForm').css("display", "none");
    $('#contactIcon').css("display", "block");
});

$("#submitForm").click(function() {
    var validated = true;
    if($("#contactName").val()=="") {
        $("#contactName").popover('show');
        validated = false;
    } else {
        $("#contactName").popover('hide');
    };
    if($("#email").val()=="") {
        $("#email").popover('show');
        validated = false;
    } else {
        $("#email").popover('hide');
    };
    if($("#message").val()=="") {
        $("#message").popover('show');
        validated = false;
    } else {
        $("#message").popover('hide');
    };
    if (validated) {
        $('#contactForm').css("display", "none");
        $('#contactIcon').css("display", "block");
    }
});

$("nav a").click(function(){
    $("nav a").removeClass('active');
    $(this).addClass('active');
});

//Slideshow
var slideIndex = 1
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
