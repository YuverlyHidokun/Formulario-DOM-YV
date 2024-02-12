let contenedor = document.querySelector("#contenedor");
let subtitulo = document.createElement("h3");
subtitulo.innerText = "Árbol de nodos";

let imagen = document.createElement("img")
imagen.src = "assets/imagenes/logo.jpg"
imagen.width = "300";
imagen.height = "300";
imagen.alt = "árbol de nodos";

contenedor.append(subtitulo, imagen)

const usuario = {
    nombre: 'Yuverly',
    apellido: 'Verdezoto',
    user:'Hidokun',
    email: 'yuverly@gmail.com',
    descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imagen: "assets/imagenes/1.png"
};

const crearTarjeta = () => {
    let columnaTarjeta = document.createElement('div')
    columnaTarjeta.className = 'col'

    const TarjetaUsuario = `
    <div class="card" style="width: 18rem;">
        <img src="${usuario.imagen}" class="card-img-top" alt="${usuario.nombre}" width="200" height="300">
        <div class="card-body">
        <h5 class="card-title">${usuario.nombre} ${usuario.apellido}</h5>
        <p class ="text-muted">${usuario.user}</p>
        <p class="card-text">${usuario.descripcion}</p>
        <p class ="text-muted">${usuario.email}</p>
        <a href="#" class="btn btn-primary" onclick="eventoclick(event)">Go somewhere</a>
        </div>
    </div>
    `;
    columnaTarjeta.innerHTML = TarjetaUsuario
    document.querySelector("#contenedor-tarjeta").append(columnaTarjeta)
}

const modificarAutor = (event) => {
    console.log(event);
    event.preventDefault();
  
    usuario.nombre = document.querySelector("#nombre").value;
    usuario.apellido = document.querySelector("#apellido").value;
    usuario.user = document.querySelector("#usuario").value;
    usuario.email = document.querySelector("#email").value;
  
    crearTarjeta();
    limpiarFormulario();
};

const limpiarFormulario = () => {
    document.getElementById("formulario").reset();
};
  
document.getElementById("formulario").addEventListener("submit", modificarAutor);
crearTarjeta();