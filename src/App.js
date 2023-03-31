import { Routes, Route, Link } from 'react-router-dom';
import Category from './components/Category';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav>
        <h1>BookStore CMS</h1>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Category"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Category
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
