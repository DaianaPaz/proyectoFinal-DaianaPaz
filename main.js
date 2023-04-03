/*ENTRADAS AL CINE*/

class Persona{
    constructor(nombre, edad, tipoDeEntrada, formaDePago){
        this.nombre = nombre;
        this.edad = edad;
        this.tipoDeEntrada = tipoDeEntrada;
        this.formaDePago = formaDePago;
    }
}

const personas = [];

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarPersona();
});

function agregarPersona(){
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const entrada = document.getElementById('entrada').value;
    const pago = document.getElementById('pago').value;
    const nuevaPersona = new Persona(nombre, edad, entrada, pago);
    personas.push(nuevaPersona);
    localStorage.setItem('personas', JSON.stringify(personas));
    formulario.reset();
}



const usuarios = document.getElementById('usuarios');

const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', () => {
    mostrarPersonas();
});

function mostrarPersonas(){
    usuarios.innerHTML = '';
    personas.forEach((persona) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div>
            <h2>Nombre: ${persona.nombre}</h2>
            <p>Edad: ${persona.edad}</p>
            <p>Tipo de entrada: ${persona.tipoDeEntrada}</p>
            <p>Forma de pago: ${persona.formaDePago}</p>
        </div>`;
        div.className = "colorDeFondo";
        usuarios.appendChild(div);  
    });
}

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    Swal.fire({
        title: 'Desea borrar el?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('personas', JSON.stringify(personas));
            location.reload();
        Swal.fire(
            'Su compra ha sido cancelada'
        )
        }
    });
});

let pulsar = document.getElementById("aceptar");
let mensaje = document.getElementById("mensaje");

pulsar.addEventListener("click", () => {
    mensaje.classList.add("color");

    setTimeout(() => {
        mensaje.classList.remove("color");
    }, 3000);
});

const traerUsuarios = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(personas);
        }, 3000);
    });
};

traerUsuarios()
.then(response => {
    console.log(response);
})

let listado = document.getElementById("listado");

fetch("./data.json")
.then(response => response.json())
.then(data => {
data.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("col-sm-4", "col");
    div.innerHTML = `
    <div class="card mb-3">
        <div class="card-body">
        <h2 class="card-title">${producto.nombre}</h2>
        <p class="card-text">${producto.precio}</p>
        </div>
    </div>
    `;

    listado.append(div);
});
})