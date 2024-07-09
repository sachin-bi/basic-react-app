import Product from "./Product";
function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  
    return (
      <div style={styles}>
        <Product title="Apple Pensil (Gen 2)" idx={0} />
        <Product title="Petronics Mouse 5G" idx={1} />
        <Product title="MSI Laptop Bravo 15" idx={2} />
        <Product title="Guitar BMW base v5" idx={3} />
        
      </div>
    );
  }

  export default ProductTab;