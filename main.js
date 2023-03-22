/*ENTRADAS AL CINE*/

function saludar(){
    alert("Bienvenido/a");
}

let edad;

for(let i = 0; i < 10; i++){
    saludar();
    edad = prompt("Ingresar edad");
    edad = parseInt(edad);
    
    if(edad > 17){
        alert("Puede entrar");
    }else{
        alert("Debe entrar con un adulto");
    }

}
alert("No hay mas entradas");