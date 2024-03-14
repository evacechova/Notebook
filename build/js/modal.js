const modal = document.querySelector("#modal");
const openModal = document.querySelector("#btn-create");
const closeModal = document.querySelector("#modal__close");

openModal.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});