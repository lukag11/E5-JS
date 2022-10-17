const productos = [
  {
    id: 1,
    nombre: "Bennazianna",
    precio: 3650,
    info: "La más completa",
    imagen: './assets/Bennazianna.png',
    category: "pizza"
  },
  {
    id: 2,
    nombre: "Tronco-Pizza",
    precio: 870,
    info: "Para todo el día",
    imagen: './assets/TroncoPizza.png',
    category: "pizza"
  },
  {
    id: 3,
    nombre: "Papas | Provenzal",
    precio: 360,
    info: "Van como piña",
    imagen: './assets/PapasProvenzal.png',
    category: "fries"
  },
  {
    id: 4,
    nombre: "La Mr. Pit",
    precio: 350,
    info: "Solo para expertos",
    imagen: './assets/MrPit.png',
    category: "pizza"

  },
  {
    id: 5,
    nombre: "Q'Jamone",
    precio: 350,
    info: "c/jamón crudo",
    imagen: './assets/QJamone.png',
    category: "pizza"

  },
  {
    id: 6,
    nombre: "La Charly García",
    precio: 380,
    info: "¡BASTA!",
    imagen: './assets/CharlyGarcia.png',
    category: "pizza"
  },
  {
    id: 7,
    nombre: "La Maradona",
    precio: 450,
    info: "¡Eterna!",
    imagen: './assets/Maradona.png',
    category: "pizza"
  },
  {
    id: 8,
    nombre: "Picantovich",
    precio: 750,
    info: "Pica 2 veces",
    imagen: './assets/Picantovich.png',
    category: "pizza"
  },
  {
    id: 9,
    nombre: "La Hasbulla",
    precio: 990,
    info: "En honor al 1",
    imagen: './assets/Hasbulla.png',
    category: "pizza"
  },
  {
    id: 10,
    nombre: "Leo Messi",
    precio: 10,
    info: "¡De pié señores!",
    imagen: './assets/LeoMessi.png',
    category: "individuales"
  },
  {
    id: 11,
    nombre: "Nick Gi",
    precio: "Gratis",
    info: "La que desaparece",
    imagen: './assets/NickGi.png',
    category: "pizza"
  },
];

// Quise pasar el objeto a otro file (sin exito). Alguien se anima?
// const productos = require('./data')
// import productos from "./data.js"

const cards = document.querySelector('.cards-container');
const popular = document.querySelector('.popular-container');
const categoriesList = document.querySelectorAll('.item-filter');
const categories = document.querySelector('.filter-cards')

let storedProducts = JSON.parse(localStorage.getItem('productos')) || [];

const saveLocalStorage = productos => {
  localStorage.setItem('productos', JSON.stringify(productos));
};

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

const filteredElements = (category) => {
  const productList = productos.filter(product => product.category ===
category);
  return productList;
}

const renderCard = producto => {
  const { nombre, precio, info, imagen, category } = producto;
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

const changeBtnActiveState = selectedCategory => {
  const categories = [ ... categoriesList ];
  categories.forEach(categoryBtn => {
    if(categoryBtn.dataset.category !== selectedCategory)
    {
      categoryBtn.classList.remove('active');
      return;
    }
    categoryBtn.classList.add('active');
  });
};

const changeBtnState = e => {
  const selectedCategory = e.target.dataset.category;
  changeBtnActiveState(selectedCategory);
}

const applyFilters = e => {
  if(!e.target.classList.contains('item-filter')) return;
  changeBtnState(e);
  renderProducts(e.target.dataset.category);
}

const renderProducts = (category = undefined) => {
  if(!category) {
    renderCards(getElements(), popular, renderCard);
    return;
  }
  renderCards(filteredElements(category), popular, renderCard);
}

const init = () => {
  saveLocalStorage(productos);
  renderCards(getElements(), popular, renderCard);
  renderCards(getRandomElements(), cards, renderRandom);
  categories.addEventListener("click", applyFilters);
}

init();