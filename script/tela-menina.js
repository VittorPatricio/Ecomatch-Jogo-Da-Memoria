const voltarParaInicio = document.getElementById("inicio");
const pararSom = document.getElementById("som")
const confirmationModal = document.getElementById("confirmationModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");


voltarParaInicio.addEventListener("click", () => {
    confirmationModal.style.display = "flex";
});

confirmYes.addEventListener("click", () => {
    window.location.href = "inicio.html";
});

confirmNo.addEventListener("click", () => {
    confirmationModal.style.display = "none";
});
