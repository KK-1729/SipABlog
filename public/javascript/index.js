function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const myFunction = () => {
    document.getElementById("first").style.display ='block';
}

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

var animate = ScrollReveal();

animate.reveal('.mn1', {
    duration: 3000,
    origin: 'left',
    distance: '100px'
});
animate.reveal('.mn2', {
    delay: 250,
    duration: 3000,
    origin: 'left',
    distance: '100px'
});
animate.reveal('.mn3', {
    delay: 500,
    duration: 3000,
    origin: 'left',
    distance: '100px'
});
animate.reveal('.mn4', {
    delay: 750,
    duration: 3000,
    origin: 'left',
    distance: '100px'
});
animate.reveal('.firstbhead', {
    duration: 3000,
    origin: 'left',
    distance: '100px'
});
animate.reveal('.firstb', {
    duration: 3000,
    origin: 'right',
    distance: '100px'
});
animate.reveal('.head1', {
    duration: 4000,
    origin: 'right',
    distance: '100px'
});