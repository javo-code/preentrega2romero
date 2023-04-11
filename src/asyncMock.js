import Nutrition1 from "./img/nutrilon.jpg";
import Nutrition2 from "./img/ensure.jpg";
import Nutrition3 from "./img/lactoproteyn.jpg";
import Nutrition4 from "./img/alfare.jpg";
import Nutrition5 from "./img/fresubin.jpg";
import Nutrition6 from "./img/alterna.jpg";
import Disposable1 from "./img/descartable-jeringa.jpg";
import Disposable2 from "./img/descartable-sets.jpg";
import Disposable3 from "./img/descartable-contenedor.jpg";
import Disposable4 from "./img/descartable-fisio.jpg";
import Disposable5 from "./img/descartable-gasa.jpg";
import Disposable6 from "./img/descartable-heparina.jpg";
import Bomb1 from "./img/bomba-epump.jpg";
import Bomb2 from "./img/bomba-angel.jpg";
import Bomb3 from "./img/bomba-asena.jpg";
import Bomb4 from "./img/bomba-comen.jpg";
import Bomb5 from "./img/bomba-epump.jpg";
import Bomb6 from "./img/bomba-ningbo.jpg";

const products = [
  {
    id: "1",
    name: "Nutrilon",
    price: "9.000",
    category: "nutrition",
    img:Nutrition1,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "2",
    name: "Ensure",
    price: "9.000",
    category: "nutrition",
    img:Nutrition2,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "3",
    name: "Lactoproteyn",
    price: "7.000",
    category: "nutrition",
    img:Nutrition3,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "4",
    name: "Alfare",
    price: "10.000",
    category: "nutrition",
    img:Nutrition4,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "5",
    name: "Fresubin",
    price: "9.500",
    category: "nutrition",
    img:Nutrition5,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "6",
    name: "Alterna",
    price: "10.200",
    category: "nutrition",
    img:Nutrition6,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "7",
    name: "Jeringas",
    price: "9.500",
    category:"disposables",
    img: Disposable1,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "8",
    name: "Sets",
    price: "10.200",
    category:"disposables",
    img: Disposable2,
    stock: 10,
    description: " Pote x 1000 grs.",
  },  {
    id: "9",
    name: "Contenedor",
    price: "9.500",
    category:"disposables",
    img: Disposable3,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "10",
    name: "Sol. Fisiologica",
    price: "10.200",
    category:"disposables",
    img: Disposable4,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "11",
    name: "Gasa No Tejida",
    price: "9.500",
    category:"disposables",
    img: Disposable5,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "12",
    name: "Heparina Sodica",
    price: "10.200",
    category:"disposables",
    img: Disposable6,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "13",
    name: "Epump",
    price: "9.500",
    category:"bombs",
    img: Bomb1,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "14",
    name: "Angel",
    price: "300.000",
    category:"bombs",
    img: Bomb2,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "15",
    name: "Asena",
    price: "420.000",
    category:"bombs",
    img: Bomb3,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "16",
    name: "Comen",
    price: "500.200",
    category:"bombs",
    img: Bomb4,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "17",
    name: "Epump",
    price: "390.500",
    category:"bombs",
    img: Bomb5,
    stock: 10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "18",
    name: "Ningbo",
    price: "275.200",
    category:"bombs",
    img: Bomb6,
    stock: 10,
    description: " Pote x 1000 grs.",
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    },500)
  })
}

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    },500)
  })
}

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.category === productCategory))
    },500)
  })

}


