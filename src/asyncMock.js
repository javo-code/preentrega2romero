import Img1 from "./img/nutrilon.jpg";
import Img2 from "./img/ensure.jpg";
import Img3 from "./img/lactoproteyn.jpg";
import Img4 from "./img/alfare.jpg";
import Img5 from "./img/fresubin.jpg";
import Img6 from "./img/alterna.jpg";

const products = [
  {
    id: "1",
    name: "Nutrilon",
    price: "9.000",
    category: "nutrition",
    img:Img1,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "2",
    name: "Ensure",
    price: "9.000",
    category: "nutrition",
    img:Img2,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "3",
    name: "Lactoproteyn",
    price: "7.000",
    category: "nutrition",
    img:Img3,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "4",
    name: "Alfare",
    price: "10.000",
    category: "nutrition",
    img:Img4,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "5",
    name: "Fresubin",
    price: "9.500",
    category: "nutrition",
    img:Img5,
    stock:10,
    description: " Pote x 1000 grs.",
  },
  {
    id: "6",
    name: "Alterna",
    price: "10.200",
    category: "nutrition",
    img:Img6,
    stock:10,
    description: " Pote x 1000 grs.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    },500)
  })
}
