const cards =document.querySelector('.cards-container')
const popular =document.querySelector('.popular-container')


const productos = [
    {
      id: 1,
      nombre: "Bennazianna",
      precio: 3650,
      info: "La más completa",
      imagen: './assets/Bennazianna.png'
    },
    {
      id: 2,
      nombre: "Tronco-Pizza",
      precio: 870,
      info: "Para todo el día",
      imagen: './assets/TroncoPizza.png'
    },
    {
      id: 3,
      nombre: "Papas | Provenzal",
      precio: 360,
      info: "Van como piña",
      imagen: './assets/PapasProvenzal.png'
    },
    {
      id: 4,
      nombre: "La Mr. Pit",
      precio: 350,
      info: "Solo para expertos",
      imagen: './assets/MrPit.png'
    },
    {
      id: 5,
      nombre: "Q'Jamone",
      precio: 350,
      info: "c/jamón crudo",
      imagen: './assets/QJamone.png'
    },
    {
      id: 6,
      nombre: "La Charly García",
      precio: 380,
      info: "¡BASTA!",
      imagen: './assets/CharlyGarcia.png'
    },
    {
      id: 7,
      nombre: "La Maradona",
      precio: 450,
      info: "¡Eterna!",
      imagen: './assets/Maradona.png'
    },
    {
      id: 8,
      nombre: "Picantovich",
      precio: 750,
      info: "Pica 2 veces",
      imagen: './assets/Picantovich.png'
    },
    {
      id: 9,
      nombre: "La Hasbulla",
      precio: 990,
      info: "En honor al 1",
      imagen: './assets/Hasbulla.png'
    },
    {
      id: 10,
      nombre: "Leo Messi",
      precio: 10,
      info: "¡De pié señores!",
      imagen: './assets/LeoMessi.png'
    },
    {
      id: 11,
      nombre: "Nick Gi",
      precio: "Gratis",
      info: "La que desaparece",
      imagen: './assets/NickGi.png'
    },
];

let storedProducts = JSON.parse(localStorage.getItem('productos')) || [];

const saveLocalStorage = productos => {
  localStorage.setItem('productos', JSON.stringify(productos));
};

// Cual es el sentido de esto??

// const randomItem = () => {
//   let random = productos.sort(() => .5 - Math.random()*productos.length);
//   return random
// }

const getRandomElements = () => {
  let rnd = [...productos].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 3)
  return rnd
}

const renderRandom = producto => {
  const { nombre, precio, info, imagen } = producto;
  return `
  <div class="card">
   <div class="card-img">
    <img src="${imagen}" alt="${nombre}" class="card-img">
   </div>
   <div class="card-info">
    <h2>${nombre}</h2>
    <p>${info}</p>
    <h3>$ ${precio}</h3>
   </div>
   <button class="btn add-btn">Agregar</button>
  </div>
  `
}

const getElements = () => {
  let rnd = [...productos].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 8)
  return rnd
}

const renderCard = producto => {
  const { nombre, precio, info, imagen } = producto;
  return `
  <div class="popular-card">
   <div class="popularcard-img">
    <img src="${imagen}" alt="${nombre}" class="popularcard-img">
   </div>
   <div class="popularcard-info">
     <div class="popularcard-text">
       <h2>${nombre}</h2>
       <p>${info}</p>
       <h3>$ ${precio}</h3>
     </div>
     <button class="btn add-btn">Agregar</button>
    </div>
  </div>
  `
}

const renderCards = (array, container, f) => {
  container.innerHTML = array.map(f).join('');
}

renderCards(getRandomElements(), cards, renderRandom);
renderCards(getElements(), popular, renderCard);

const init = () => {
  saveLocalStorage(productos)
}

init();