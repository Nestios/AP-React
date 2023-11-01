
function guardarTarea(event) {
    event.preventDefault();//evita guardar el form en blanco o con un campo en blanco
    var opc_Seleccionada = document.getElementById("estado").value;
    alert("Estado seleccionado: " + opc_Seleccionada);
}

document.getElementById("taskForm").addEventListener("submit", guardarTarea);
