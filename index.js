function popupfunc(num){

  // Get the modal
  var modal = document.getElementById("modal"+num);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close"+num)[0];
  

  modal.style.display = "block";

  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
}
  
  
//Get the button:
mybutton = document.getElementById("myBtn");
  
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
  
function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
  //         $(document).ready(function() {
  //   $('.image-link').magnificPopup({type:'image'});
  // });