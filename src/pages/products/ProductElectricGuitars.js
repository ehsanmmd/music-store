import ProductsShow from "../ProductsShow";

const electricGuitarList = [
  // {
  //   title: "CLP-795GP",
  //   rate: 4.3,
  //   price: 68000000,
  //   offPrice: 61500000,
  //   imageUrl: require("../../images/Products/piano/CLP-795GPPE_th.jpg"),
  // },
];

const ProductElectricGuitars = (props) => {
  return <ProductsShow productList={electricGuitarList}></ProductsShow>;
};
export default ProductElectricGuitars;
