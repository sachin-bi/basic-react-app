function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was submitted.");
    console.log(event);
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="type here" type="text" /> &nbsp;
      <button>Submit</button>
    </form>
  );
}
