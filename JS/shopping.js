var images = [
  "./images/1-1.png",
  "./images/2 -1.png",
  "./images/3-1.png",
  "./images/4-1.png",
  "./images/5-1.png",
];
setInterval(function () {
  var firstImage = $("#image-container img:first").attr("src");
  $("#image-container img:first").remove();
  var index = images.indexOf(firstImage);
  var nextIndex = (index + 1) % images.length;
  $("#image-container").append(
    '<img src="' + images[nextIndex] + '" class="d-block">'
  );
}, 3000);

/*=============== CARD POPUP JS ===============*/
const modal = document.querySelectorAll(".modal"),
  cardBtn = document.querySelectorAll(".card__product"),
  modalClose = document.querySelectorAll(".modal__close"),
  modalCard = document.querySelectorAll(".modal__card");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

/* Show modal */
cardBtn.forEach((cardBtn, i) => {
  cardBtn.addEventListener("click", () => {
    activeModal(i);
  });
});

/* Hide modal */
modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  });
});

/* Hide modal on background click */
modal.forEach((modal) => {
  modal.addEventListener("click", () => {
    modal.classList.remove("active-modal");
  });
});

/* Don't hide modal on card click (by event propagation) */
modalCard.forEach((modalCard) => {
  modalCard.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
