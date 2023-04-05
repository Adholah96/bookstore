import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from './redux/books/bookSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();
  const { title, author, item_id: id } = item;

  return (
    <>
      {title}
      -
      {author}
      <button type="button" onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
