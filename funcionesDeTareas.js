let funcionesDeTareas = function (){
const fs = require("fs");
let rawData = fs.readFileSync("./tareas.json", "utf-8");
let tareasJSON = JSON.parse(rawData);
let accion = process.argv
let tareas = accion[2]

let funcionTareas = (estado) =>{
    let contador = 0;
        for (let i = 0; i < tareasJSON.length; i++) {
            if (tareasJSON[i].estado === estado){
                console.log("#. " + tareasJSON[i].titulo + " - " + tareasJSON[i].estado)
            }else {
                contador++;
            }
            if (contador === tareasJSON.length){
                console.log("No hay ninguna tarea " + estado);
            }                               
        }

}

switch (tareas){
    case "listar":{
        for (let i = 0; i < tareasJSON.length; i++) {
            console.log("#. " + tareasJSON[i].titulo + " - " + tareasJSON[i].estado)            
        }    
    }
    break;
    case "listarTerminados": {
       funcionTareas("terminado")
    }
    break;
    case "listarEnProgreso": {
        funcionTareas("en progreso")
    }
    break;
    case "listarPendientes": {
        funcionTareas("pendiente")
    }
    break;
    case undefined: {
        console.log("Atencion debe ingresar una accion");
    }
    break;
    case "help": {
        console.log("Esta es la lista de comandos: listar, listarEnProgreso, listarTerminados, listarPendientes")
    }
    break;
    default: {
        console.log("No entiendo, en caso de necesitar ayuda ingreso el comando help");
    }
};}
module.exports = funcionesDeTareas;


/*const fs = require('fs');

//leer archivo de tareas
const tareasTemp = fs.???

//ejecutar el metodo para formatear el texto a objeto
const tareasJSON = JSON.??

module.exports = tareasJSON;

//que tal si mejor se exporta un objeto que tenga el nombre del archivo y un metodo que permita leer tareas?*/
