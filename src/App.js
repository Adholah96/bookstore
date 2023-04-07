import { Routes, Route, Link } from 'react-router-dom';
import Category from './components/Category';
import Home from './components/Home';

function App() {
  return (
    <>
      <nav>
        <h1 className="nav-logo">BookStore CMS</h1>
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
        <div className="oval">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
