function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="booksContainer">
          <ul className="booksul">
            <li>
              Darkest Hour
              <span>-Arthur</span>
            </li>
            <li>
              Darkest Hour
              <span>-Ochieng</span>
            </li>
            <li>
              Climatic diversity
              <span>-Heldricks</span>
            </li>
          </ul>
        </div>
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
            <button type="button">Add Book</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
