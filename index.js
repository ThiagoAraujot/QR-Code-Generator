const container = document.querySelector(".container"),
    qrinput = container.querySelector(".form input"),
    geradorBtn = container.querySelector(".form button"),
    qrImg = container.querySelector(".qr-code img");
let preValue;

geradorBtn.addEventListener("click", () => {
    let qrValue = qrinput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    geradorBtn.innerText = "Gerando QR Code...";
    console.log(qrValue)
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        geradorBtn.innerText = "Gerar QR Code";
        // qrinput.value = "";
    });
});

qrinput.addEventListener("keyup", () => {
    if (!qrinput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
})