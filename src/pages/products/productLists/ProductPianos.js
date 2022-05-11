import ProductsShow from "../ProductsShow";

const pianoList = [
  {
    title: "CLP-795GP",
    rate: 4.3,
    price: 68000000,
    offPrice: 61500000,
    imageUrl: require("../../../images/Products/piano/CLP-795GPPE_th.jpg"),
  },
  {
    title: "CLP-785",
    rate: 4.1,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/CLP-785PE_th.jpg"),
  },
  {
    title: "CVP-701",
    rate: 3.5,
    price: 70000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/CVP-701.jpg"),
  },
  {
    title: "CVP-809",
    rate: 3.9,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/CVP-809.jpg"),
  },
  {
    title: "CVP-809GP",
    rate: 4.7,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/CVP-809GP.jpg"),
  },
  {
    title: "DGX-660",
    rate: 4.9,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/DGX-660.jpg"),
  },
  {
    title: "DGX-670",
    rate: 3,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/DGX-670.jpg"),
  },
  {
    title: "GB1K-1",
    rate: 3.8,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/GB1K-1.jpg"),
  },
  {
    title: "P-515",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/P-515.jpg"),
  },
  {
    title: "YDP-184",
    rate: 4.2,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../../images/Products/piano/YDP-184.jpg"),
  },
];

const ProductPianos = (props) => {
  return <ProductsShow productList={pianoList}></ProductsShow>;
};
export default ProductPianos;
