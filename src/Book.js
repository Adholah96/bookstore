import PropTypes from 'prop-types';

const Book = ({ author, title }) => (
  <li>
    {title}
    {' '}
    -
    {author}
    <button type="button">Remove</button>
  </li>
);

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
