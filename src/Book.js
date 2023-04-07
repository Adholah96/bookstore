import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from './redux/books/bookSlice';
import './styles/progressStyle.css';

const Book = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="list-container">
          <p className="category">{item.category}</p>
          <h1>{item.title}</h1>
          <p className="author">{item.author}</p>
        </div>
        <div className="list-button">
          <button type="button">Comments</button>
          <div className="divider-2" />
          <button type="button" onClick={() => dispatch(removeBook(item.id))}>
            Remove
          </button>
          <div className="divider-2" />
          <button type="button">Edit</button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
