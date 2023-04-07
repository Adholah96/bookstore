import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(addBook(book));
    setInput(input);
    setInput({
      title: '',
      author: '',
    });
  };

  return (
    <>
      <div className="hr" />
      <h2 className="form-h2">ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          name="title"
          value={input.title}
          placeholder="Title"
          id="input-1"
        />
        <br />
        <input
          type="text"
          name="author"
          onChange={handleInputChange}
          value={input.author}
          placeholder="Author"
          id="input-2"
        />
        <br />
        <button type="button" onClick={handleFormSubmit}>
          ADD BOOK
        </button>
      </form>
    </>
  );
};

export default Form;
