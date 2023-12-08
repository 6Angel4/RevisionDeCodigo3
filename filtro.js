const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];

const listaProductos = document.getElementById("lista-de-productos");
const inputFiltro = document.querySelector(".input");
//  ID del boton
const botonDeFiltro = document.getElementById("filtrarButton");

function displayProductos(productos) {
  // Limpiar la lista antes de agregar elementos
  listaProductos.innerHTML = "";

  productos.forEach((producto) => {
    const elementoProducto = crearElementoProducto(producto);
    listaProductos.appendChild(elementoProducto);
  });
}

function crearElementoProducto(producto) {
  const elementoProducto = document.createElement("div");
  elementoProducto.classList.add("producto");

  const tituloProducto = document.createElement("p");
  tituloProducto.classList.add("titulo");
  tituloProducto.textContent = producto.nombre;

  const imagenProducto = document.createElement("img");
  imagenProducto.setAttribute("src", producto.img);

  elementoProducto.appendChild(tituloProducto);
  elementoProducto.appendChild(imagenProducto);

  return elementoProducto;
}

function filtrarProductos() {
  const textoFiltro = inputFiltro.value.trim().toLowerCase();
  const productosFiltrados = filtrado(productos, textoFiltro);
  displayProductos(productosFiltrados);
}

function filtrado(productos = [], texto) {
  return productos.filter(
    (item) => item.tipo.includes(texto) || item.color.includes(texto)
  );
}

// Asignar la función de filtrado al hacer clic en el botón
botonDeFiltro.onclick = filtrarProductos;

// Mostrar todos los productos inicialmente
displayProductos(productos);
