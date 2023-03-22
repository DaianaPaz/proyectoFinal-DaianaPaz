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