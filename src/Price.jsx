export default function Price({ oldprice, newprice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };

  let newStyles = {
    fontWeight: "bold",
  };

  let styles = {
    backgroundColor: "#e0c367",
    height: "29px",
    width:"200px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };

  return (
    <div style={styles}>
      <span style={oldStyles}>{oldprice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={newStyles}>{newprice}</span>
    </div>
  );
}
