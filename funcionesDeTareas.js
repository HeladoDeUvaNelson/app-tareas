const fs = require('fs');

let archivoTareas = {
 archivo : 'tareas.json',

 leerJSON: function(){
   let tareas = fs.readFileSync('tareas.json','utf-8');
   return JSON.parse(tareas); 
 },

 escribirJSON: function(arrayDeTareas){
   let jsonString = JSON.stringify(arrayDeTareas);

   return fs.writeFileSync('./tareas.json', jsonString, 'utf-8');
 },

 guardarTarea: function(objetoTarea){
   datosTareasJson = this.leerJSON();
   datosTareasJson.push(objetoTarea);
   
   return this.escribirJSON(datosTareasJson);
 },
 leerPorEstado: function(estado){
   let tareasJson = this.leerJSON();
   let estadoBuscado = tareasJson.filter(tarea => tarea.estado === estado)
   return estadoBuscado;
 }

};

module.exports = archivoTareas;
