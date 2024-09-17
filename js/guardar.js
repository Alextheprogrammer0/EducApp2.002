function guardar(){
    db.collection("datosdeinicio").add({
        Nombre: document.getElementById("name").value,
        Apellidos: document.getElementById("last").value,
        Correo: document.getElementById("email").value,
        Contraseña: document.getElementById("password").value,
        Edad: document.getElementById("age").value
    })
    .then((docRef) => {
        
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}

