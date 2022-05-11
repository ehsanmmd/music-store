import ProductsShow from "../ProductsShow";

const bassGuitarList = [
  // {
  //   title: "CLP-795GP",
  //   rate: 4.3,
  //   price: 68000000,
  //   offPrice: 61500000,
  //   imageUrl: require("../../images/Products/piano/CLP-795GPPE_th.jpg"),
  // },
];

const ProductBassGuitars = (props) => {
  return <ProductsShow productList={bassGuitarList}></ProductsShow>;
};
export default ProductBassGuitars;
