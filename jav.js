/* Galeria de imagenes */
const modal = document.getElementById("modal");
const imgGrande = document.getElementById("img-grande");
const miniaturas = document.querySelectorAll(".mini");
const cerrar = document.querySelector(".cerrar");

miniaturas.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    imgGrande.src = img.src;
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

