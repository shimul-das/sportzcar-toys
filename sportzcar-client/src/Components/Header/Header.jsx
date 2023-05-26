
// export default Header;
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import logo1 from './../../../public/logo.png';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleLogout = () => {
    setIsHovering(false);
    logout()
      .then(result => {})
      .catch(error => console.error(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <header className="bg-slate-300">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo1}
                width="150"
                height="70"
                className="inline-block align-top"
                alt="Website Logo"
              />
            </Link>
          </div>
          <div className="hidden sm:flex space-x-4 text-lg font-semibold items-center">
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`${
                  location.pathname === '/' ? 'text-black font-bold' : 'text-gray-300'
                } hover:text-blue-500 hover:underline text-xl`}
                style={{ color: '#186FB5' }}
              >
                Home
              </Link>
              <Link
                to="/all-toys"
                className={`${
                  location.pathname === '/all-toys' ? 'text-black font-bold' : 'text-gray-300'
                } hover:text-blue-500 hover:underline text-xl`}
                style={{ color: '#186FB5' }}
              >
                All Toys
              </Link>
              {user &&
              <Link
                to="/my-toys"
                className={`${
                  location.pathname === '/my-toys' ? 'text-black font-bold' : 'text-gray-300'
                } hover:text-blue-500 hover:underline text-xl`}
                style={{ color: '#186FB5' }}
              >
                My Toys
              </Link>}
              {user &&
              <Link
                to="/add-toy"
                className={`${
                  location.pathname === '/add-toy' ? 'text-black font-bold' : 'text-gray-300'
                } hover:text-blue-500 hover:underline text-xl`}
                style={{ color: '#186FB5' }}
              >
                Add A Toy
              </Link>}
              <Link
                to="/blogs"
                className={`${
                  location.pathname === '/blogs' ? 'text-black font-bold' : 'text-gray-300'
                } hover:text-blue-500 hover:underline text-xl`}
                style={{ color: '#186FB5' }}
              >
                Blogs
              </Link>
            </div>
            {user && user.photoURL ? (
              <div className="flex items-center">
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt="User Profile"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {isHovering && (
                  <div className="absolute  bg-white rounded-lg shadow-md py-2 px-4 mt-2">
                    <span className="text-gray-800">{user.displayName}</span>
                  </div>
                )}
                <button
                  type="button"
                  className="ml-2 text-xl text-black hover:text-blue-500"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-black">
                <button className="px-4 text-xl py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18l6-6-6-6-1.414 1.414L9.172 12l-4.586 4.586L6 18zM18 6l-6 6 6 6 1.414-1.414L14.828 12l4.586-4.586L18 6z"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="pt-2 pb-3">
            <div className="flex flex-col items-center">
              <Link
                to="/"
                className={`block px-4 py-2 text-sm font-semibold ${
                  location.pathname === '/' ? 'text-black' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/all-toys"
                className={`block px-4 py-2 text-sm font-semibold ${
                  location.pathname === '/all-toys' ? 'text-black' : 'text-gray-700'
                }`}
              >
                All Toys
              </Link>
              {user &&
              <Link
                to="/my-toys"
                className={`block px-4 py-2 text-sm font-semibold ${
                  location.pathname === '/my-toys' ? 'text-black' : 'text-gray-700'
                }`}
              >
                My Toys
              </Link> }
              {user &&
              <Link
                to="/add-toy"
                className={`block px-4 py-2 text-sm font-semibold ${
                  location.pathname === '/add-toy' ? 'text-black' : 'text-gray-700'
                }`}
              >
                Add A Toy
              </Link> }
              <Link
                to="/blogs"
                className={`block px-4 py-2 text-sm font-semibold ${
                  location.pathname === '/blogs' ? 'text-black' : 'text-gray-700'
                }`}
              >
                Blogs
              </Link>
            </div>
            {user && user.photoURL ? (
              <div className="flex items-center justify-center mt-4">
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt="User Profile"
                />
                <button
                  className="ml-2 text-black bg-red-500 hover:bg-red-600 rounded px-4 py-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="block px-4 text-center py-2 text-sm font-semibold text-black mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Login
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



