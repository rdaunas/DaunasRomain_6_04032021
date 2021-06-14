const modal = document.querySelector(".modal");
const contactButton = document.querySelector(".button--contact");
const closeButton = document.querySelector(".modal__close");

contactButton.addEventListener("click", () =>{
    modal.style.display = "block";
})
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
})