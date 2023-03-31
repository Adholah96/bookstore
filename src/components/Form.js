const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="booksForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title :
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="author">
          Author :
          <input type="text" name="author" id="author" />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
