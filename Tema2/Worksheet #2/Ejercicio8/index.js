const imagen = [];
imagen.push("./Imagenes/img1.jpg","./Imagenes/img2.jpg","./Imagenes/img3.avif");
const imagenAleatoria = imagen[Math.floor(Math.random() * imagen.length)];
document.write('<img src="' + imagenAleatoria + '" width="300" height="200">');