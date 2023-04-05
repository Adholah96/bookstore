import PropTypes from 'prop-types';

const Book = ({ author, title }) => (
  <p>
    {title}
    -
    {author}
    <button type="button">Remove</button>
  </p>
);

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Book;
