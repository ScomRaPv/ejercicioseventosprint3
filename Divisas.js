
let pesos = document.getElementById('pesos')
pesos.addEventListener('keyup', pesosDolares)

function pesosDolares() {
    let pesos = document.getElementById('pesos').value
    let cambio = document.getElementById('dolares')
    cambio.value = (pesos / 4010).toFixed(2);
}

let dolares = document.getElementById('dolares')
dolares.addEventListener('keyup', dolaresPesos)

function dolaresPesos() {
    let dolares = document.getElementById('dolares').value
    let cambio = document.getElementById('pesos')
    cambio.value = dolares * 4010;
} 