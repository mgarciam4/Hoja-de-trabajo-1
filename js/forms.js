function datos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;
    let nacimiento = document.getElementById("dateInput").value;

    console.log("Nombre : " + nombre + " " + apellido);
    console.log("Nacimiento: " + nacimiento);
    console.log("Correo : " + correo);
    console.log("Mensaje: " + mensaje);


    nombre = document.getElementById("nombre").value = "";
    apellido = document.getElementById("apellido").value = "";
    correo = document.getElementById("correo").value = "";
    mensaje = document.getElementById("mensaje").value = "";
    nacimiento = document.getElementById("dateInput").value = "";
}

const nombres = ['Sofia', 'Williams', 'Paula', 'Efrain', 'Luisa', 'Maribel', 'Miguel', 'Antonio', 'Pedro', 'Maria'];
const apellidos = ['Godinez', 'Hernandez', 'Garcia', 'Mazariegos', 'Lopez', 'Sanchez', 'Martinez', 'Perez', 'Gonzalez', 'Ramirez'];

const comentarios = ['Increíble experiencia en los juegos de Xetulul. ¡Divertidísimo!',
    'El parque acuático es refrescante y súper entretenido.',
    '¡Los toboganes son pura adrenalina! Recomendado.',
    'Aventura extrema en Xetulul, perfecto para toda la familia.',
    'Los hostales son cómodos y están muy bien ubicados.',
    'Diversión asegurada en cada esquina del parque.',
    'Excelente servicio en los hostales, ¡volvería sin duda!',
    'Perfecto equilibrio entre diversión y descanso en Xetulul.',
    'Los juegos mecánicos superaron mis expectativas. ¡Genial!',
    'El parque acuático es ideal para un día soleado.'
];

// genera los nombres aleatorios
function generaNombre() {
    let nombreAleatorio = Math.floor(Math.random() * nombres.length);
    let apellidoAleatorio = Math.floor(Math.random() * apellidos.length);
    let comentarioAleatorio = Math.floor(Math.random() * comentarios.length);

    return `${nombres[nombreAleatorio]} ${apellidos[apellidoAleatorio]} : ${comentarios[comentarioAleatorio]}`;
}

//Inserta los nombre aleatorios en el HTML
const usuariosLista = document.getElementById('usuarios');

for (let i = 0; i < 3; i++) {
    let nombresFull = generaNombre();

    let usuario = document.createElement('h6');
    usuario.textContent = nombresFull;
    usuariosLista.appendChild(usuario);
}