// Base code source: https://www.w3schools.com/howto/howto_css_modal_images.asp Code for multiple image modal by YouneL https://stackoverflow.com/questions/47798971/several-modal-images-on-page

// select images by class name
var img = document.getElementsByClassName('modal-img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// show modal function
var showModal = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// bind click event to each img
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}