const notas = [
    {
        id: 1,
        titulo: 'Sacar la basura',
        descripcion: 'Mi mama me va a retar si no lo hago',
        realizada: false
    },
    {
        id: 2,
        titulo: 'comer',
        descripcion: 'Quedo comida de ayer',
        realizada: false
    },
    {
        id: 3,
        titulo: 'Estudiar eventos',
        descripcion: 'Estoy flojo de papeles y no voy a aprobar ',
        realizada: false
    },
    {
        id: 4,
        titulo: 'Tomar agua',
        descripcion: 'Debo hidratarme bien para no desmayarme',
        realizada: false
    },
    {
        id: 5,
        titulo: 'Bañarme',
        descripcion: 'Ya es ese dia del mes',
        realizada: false
    },
    {
        id: 6,
        titulo: 'Tocar la guitarra',
        descripcion: 'debo praticar guitarra 1 hora al dia',
        realizada: false
    },

]

let switchNotasRealizadas = false
let idGlobal = 8
let buscador = document.getElementById("buscarPalabra")


let tarjetas = document.getElementById("tarjetasNotas")
document.addEventListener('DOMContentLoaded', pintarNotas(notas))

 buscador.addEventListener("keyup", e => {
    let nuevoArreglo = filtrarPalabra(notas, e.target.value)
    pintarNotas(nuevoArreglo, tarjetas)
})

function pintarNotas(notas) {
    tarjetas.innerHTML = ""
    if (notas.length === 0) {
        let element = document.createElement("div")
        element.classList.add("col-12")
        element.innerHTML =
            '<h2 class = "text-center text-secondary my-5">No hay elementos para mostrar</h2>'
        tarjetas.appendChild(element)
    } else {

        if (switchNotasRealizadas === false) {
            for (let i = 0; i < notas.length; i++) {
                let card = document.createElement("div")
                card.classList.add("card", "col-md-4", "col-lg-3", "my-4", "mx-md-5", "mx-lg-4", "p-0")
                let tachadas = notas[i].realizada ? 'tachadas' : '';
                card.innerHTML =
                    `<div class="card-header d-flex justify-content-between  align-items-center w-100" data-id="${notas[i].id}">
                         <input onClick = "marcarRealizada(${notas[i].id})" type="checkbox" ${notas[i].realizada ? "checked" : ""}> </input>
                         <h5 class="m-2">${notas[i].titulo}</h5>
                         <a class="bi bi-trash" text-danger clickeable" onClick = "eliminarNota(${notas[i].id})"></a>
                     </div>
                     <div class="card-body">
                        <p class="card-text ${tachadas}">${notas[i].descripcion}</p>
                    </div>`
                tarjetas.appendChild(card)
            }

        } else {
            let notasRealizadas = notas.filter(nota => nota.realizada === true);
            for (let i = 0; i < notasRealizadas.length; i++) {
                let card = document.createElement("div")
                card.classList.add("card", "col-md-4", "col-lg-3", "my-4", "mx-md-5", "mx-lg-4", "p-0")
                let tachadas = notasRealizadas[i].realizada ? 'tachadas' : '';
                card.innerHTML =
                    `<div class="card-header d-flex justify-content-between  align-items-center w-100" data-id="${notasRealizadas[i].id}">
                         <input onClick = "marcarRealizada(${notasRealizadas[i].id})" type="checkbox" ${notasRealizadas[i].realizada ? "checked" : ""}> </input>
                         <h5 class="m-2">${notasRealizadas[i].titulo}</h5>
                         <a class="bi bi-trash" text-danger clickeable" onClick = "eliminarNota(${notasRealizadas[i].id})"></a>
                     </div>
                     <div class="card-body">
                        <p class="card-text ${tachadas}">${notasRealizadas[i].descripcion}</p>
                    </div>`
                tarjetas.appendChild(card)
            }
        }
    }
}

let guardar = document.getElementById('guardar')
guardar.addEventListener('click', crearNota)

function crearNota() {
    let titulo = document.getElementById('tituloNota').value
    let descripcion = document.getElementById('textoNota').value
    let nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        descripcion: descripcion,
        realizada: false
    }

    idGlobal++
    notas.push(nuevaNota)
    pintarNotas(notas)
}


let borrarTexto = document.getElementById('borrar')
borrarTexto.addEventListener("click", e => {
    let titulo = document.getElementById('tituloNota')
    let descripcion = document.getElementById('textoNota')
    titulo.value = ""
    descripcion.value = ""
})


function eliminarNota(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id == id) {
            notas.splice(i, 1);
        }
    }
    pintarNotas(notas)
}

function marcarRealizada(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id == id) {
            if (notas[i].realizada === false) {
                notas[i].realizada = true
            } else {
                notas[i].realizada = false
            }
        }
    }
    pintarNotas(notas)
}

function completadas() {
    switchNotasRealizadas = !switchNotasRealizadas;
    pintarNotas(notas);
}

function filtrarPalabra(notas, palabraClave) {
    let arregloFiltrado = notas.filter(notas => notas.titulo.toLowerCase().includes(palabraClave.toLowerCase()) || notas.descripcion.toLowerCase().includes(palabraClave.toLowerCase()))
  return arregloFiltrado
}

