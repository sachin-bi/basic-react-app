import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldprices = ["1599", "349", "45999", "26599"];
  let newprices = ["1109", "249", "35899", "20999"];
  let description = [
    ["Brand new design", "5000 DPI"],
    ["5000 DPI", "Best Specification"],
    ["Best Specification","5000 DPI"],
    ["Experience Emersing ","Enjoy Creating Sound"]
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldprice={oldprices[idx]} newprice={newprices[idx]} />
    </div>
  );
}

export default Product;
