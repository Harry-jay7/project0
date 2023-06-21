var slideIndex = 0
showSlides ("imagedlider.html");

function showSlides( ) {
    var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
    for (var i = 0; 1 <slider.lenght; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.lenght) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); //Change slide every 2 seconds
}