export default function Price({ oldprice, newprice }) {
    let oldStyles={
        textDecorationLine:"line-through",
    };

  return (
    <div>
      <span style={oldStyles}>{oldprice}</span>
      &nbsp; &nbsp; &nbsp;
      <span>{newprice}</span>
    </div>
  );
}
