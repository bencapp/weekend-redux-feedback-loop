function Form() {
  return (
    <>
      <h3>How are you feeling today?</h3>
      <form>
        <label htmlFor="rating-input">How are you feeling today?</label>
        <input type="number" min="1" max="5" name="rating-input" />
      </form>
    </>
  );
}

export default Form;
