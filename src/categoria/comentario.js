import React from "react";

// Función para agregar comentarios
function comentario(recetaId, inputId) {
    // Obtener el valor del comentario
    var comentario = document.getElementById(inputId).value;
    
    // Crear un nuevo elemento de lista para el comentario
    var nuevoComentario = document.createElement("li");
    nuevoComentario.appendChild(document.createTextNode(comentario));
    
    // Obtener la lista de comentarios y agregar el nuevo comentario
    var listaComentarios = document.getElementById("comentarios" + recetaId);
    listaComentarios.appendChild(nuevoComentario);
    
    // Limpiar el campo de entrada
    document.getElementById(inputId).value = "";
}
export default comentario;
  