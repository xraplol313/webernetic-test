document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".form__section");
  const openModalBtn = document.querySelector(".main__descr-button");
  const closeModalBtn = document.querySelector(".form__modal-btn");
  const overlay = document.querySelector(".overlay");

  function closeModal() {
    modal.style.display = "none";
    overlay.classList.remove("show");
  }

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
    overlay.classList.add("show");
  });

  closeModalBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target === modal || event.target === overlay) {
      closeModal();
    }
  });
});
