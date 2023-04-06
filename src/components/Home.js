import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from '../Book';
import { fetchBooksData } from '../redux/books/bookSlice';

function Home() {
  const {
    books, isLoading, error, success,
  } = useSelector(
    (store) => store.book,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksData());
  }, [dispatch, success]);

  if (isLoading) {
    return <h1>Waiting</h1>;
  }

  if (error) {
    return <h2>Unable to fetch books</h2>;
  }

  if (books.length === 0) {
    return (
      <>
        <h2 className="no-book">No books, Add a few</h2>
        <Form />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="booksContainer">
          <ul className="booksul">
            {books.map((book) => (
              <li key={book.id}>
                <Book item={book} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Form />
    </>
  );
}

export default Home;
