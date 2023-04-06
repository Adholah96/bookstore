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
    <form>
      <input
        type="text"
        onChange={handleInputChange}
        name="title"
        value={input.title}
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        name="author"
        onChange={handleInputChange}
        value={input.author}
        placeholder="Author"
      />
      <br />
      <button type="button" onClick={handleFormSubmit}>
        Add Book
      </button>
    </form>
  );
};

export default Form;
