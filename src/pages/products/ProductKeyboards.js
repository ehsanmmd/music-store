import ProductsShow from "../ProductsShow";

const keyboardList = [
  {
    title: "PSR_E363",
    rate: 4.3,
    price: 68000000,
    offPrice: 61500000,
    imageUrl: require("../../images/Products/keyboard/PSR_E363.jpg"),
  },
  {
    title: "PSR_E473",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/keyboard/PSR_E473.jpg"),
  },
  {
    title: "PSR_EW425",
    rate: 4.4,
    price: 70000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/keyboard/PSR_EW425.jpg"),
  },
  {
    title: "PSR_F51",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/keyboard/PSR_F51.jpg"),
  },
  {
    title: "PSR_S950",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/keyboard/PSR_S950.jpg"),
  },
  {
    title: "PSR_S975",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/keyboard/PSR_S975.jpg"),
  },
  {
    title: "PSRE443",
    rate: 4.4,
    price: 72000000,
    offPrice: 0,
    imageUrl: require("../../images/Products/keyboard/PSRE443.jpg"),
  },
];

const ProductKeyboards = (props) => {
  return <ProductsShow productList={keyboardList}></ProductsShow>;
};
export default ProductKeyboards;
