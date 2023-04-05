import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const random = () => {
      const number = Math.floor(Math.random() * 44556) + 10000;
      const random = number.toString();
      return random;
    };
    const formData = new FormData(e.target);
    const newBook = {
      item_id: random(),
      author: formData.get('author'),
      title: formData.get('title'),
    };
    dispatch(addBook(newBook));
    e.target.reset();
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
