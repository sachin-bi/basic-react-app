const num = Number("42");
function handleClick() {
  console.log("hi");
}
function handleMouseOver(event) {
  console.log("yes mouseOver!");
}
function handleDoubleClick(event) {
  console.log("yes onDoubleClick!");
}

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver} style={{ border: "2px dotted" }}>
        Clicked {num} times..
      </p>
      <button onDoubleClick={handleDoubleClick}>Click me2!</button>
    </div>
  );
}
