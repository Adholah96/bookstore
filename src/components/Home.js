import Form from './Form';
import Book from '../Book';

function Home() {
  const books = [
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
  ];
  return (
    <>
      <div className="container">
        <div className="booksContainer">
          <ul className="booksul">
            {books.map((book) => (
              <Book key={book.id} title={book.title} author={book.author} />
            ))}
          </ul>
        </div>
        <Form />
      </div>
    </>
  );
}

export default Home;
