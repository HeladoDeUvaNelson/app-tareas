const archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2];
let titulo = process.argv[3];
let filtrar = process.argv[3]

switch (accion){
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerJSON();
        tareas.forEach(function(tarea, tareaActual){
            console.log(tareaActual+1 + '. ' + tareas[tareaActual].titulo + ' - ' + tareas[tareaActual].estado);
        });
        break;

    case 'crear':
        let nuevaTarea = {

            titulo: titulo,
            estado: "pendiente" 

        };

        archivoTareas.guardarTarea(nuevaTarea);
        console.log('La tarea ' + titulo + ' ha sido creada con exito!');
        break;

    case 'filtrar':
        let estado = filtrar;
        console.log('Los estados en "' + estado + '" son:');
        let listaDeLosEstados = archivoTareas.leerPorEstado(estado);
        listaDeLosEstados.forEach(estado => console.log(estado.titulo));
        
        let tituloMapeo = listaDeLosEstados.map(estado => estado.titulo);
        let ultimoTitulo = tituloMapeo.pop();
        let guardandoLargo = [];

         for (let i = 0; i < ultimoTitulo.length; i++){
            guardandoLargo.push("-")
        }

        console.log(guardandoLargo.join(''));
        

        break;

    case undefined:
        console.log('Atención - Tienes que pasar una acción.')
        console.log('Las acciones disponibles son: listar, crear, filtrar');
        console.log('--------------------------------------');
        break;

    default:
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar, crear, filtrar');
        console.log('------------------------------------');
        
}