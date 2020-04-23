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
    console.log('hello there');
    console.log($("#contactName").val());
    if($("#contactName").val()=="") {
        console.log('yes');
        $("#contactName").popover('show');
    } else {
        $("#contactName").popover('hide');
    };
    if($("#email").val()=="") {
        console.log('yes');
        $("#email").popover('show');
    } else {
        $("#email").popover('hide');
    };
    if($("#message").val()=="") {
        console.log('yes');
        $("#message").popover('show');
    } else {
        $("#message").popover('hide');
    };
    $('#contactForm').css("display", "none");
    $('#contactIcon').css("display", "block");
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
