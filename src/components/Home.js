import { useSelector } from 'react-redux';
import Form from './Form';
import Book from '../Book';

function Home() {
  const { bookItems } = useSelector((store) => store.book);
  return (
    <>
      <div className="container">
        <div className="booksContainer">
          <ul className="booksul">
            {bookItems.map((book) => (
              <li key={book.item_id}>
                <Book item={book} />
              </li>
            ))}
          </ul>
        </div>
        <Form />
      </div>
    </>
  );
}

export default Home;
