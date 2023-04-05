import { useSelector } from 'react-redux';
import Form from './Form';
import Book from '../Book';

function Home() {
  const { bookItems } = useSelector((store) => store.book);
  return (
    <>
      <div className="container">
        <div className="booksContainer">
          <div className="booksul">
            {bookItems.map((book) => (
              <Book key={book.id} title={book.title} author={book.author} />
            ))}
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}

export default Home;
