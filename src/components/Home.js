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
                <div className="contain">
                  <div className="book-progress">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <div
                      role="progressbar"
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                    <div className="task-progress">
                      <p className="Complete-Task">
                        {Math.floor(Math.random() * (99 - 0)) + 0}
                        <span>%</span>
                      </p>
                      <p className="Completed">Completed</p>
                    </div>
                  </div>
                  <div className="divider-1" />
                  <div className="level">
                    <p className="main-l">CURRENT CHAPTER</p>
                    <p className="main-chapter">
                      Chapter
                      {' '}
                      {Math.floor(Math.random() * (20 - 0)) + 0}
                    </p>
                    <button type="button" className="Update-progress">
                      UPDATE PROGRESS
                    </button>
                  </div>
                </div>
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
