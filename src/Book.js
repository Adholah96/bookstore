import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from './redux/books/bookSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <>
      {item.title}
      -
      {item.author}
      <button type="button" onClick={() => dispatch(removeBook(item.id))}>
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
