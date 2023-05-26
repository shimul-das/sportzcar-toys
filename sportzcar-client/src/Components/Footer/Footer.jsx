
// export default Footer;
import React from 'react';
import logo1 from './../../../public/logo1.png';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#182352] text-white mt-5 p-5">
      <div className="container mx-auto">
        <div className='py-3 flex flex-col md:flex-row justify-center items-center'>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              src={logo1}
              width="150"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <p className="pe-3 fs-6 fw-semibold text-xl pt-2">
              Our website is a haven for car enthusiasts, offering a diverse collection of high-quality sports car toys that are built to impress. From sleek and stylish race cars to rugged off-road vehicles, we have something to cater to every young speedster's taste.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mt-5 md:mt-0 mx-auto">
            <h3 className="text-3xl">Quick Link</h3>
            <ul className="list-none p-0 mt-3">
              <li>
                <Link to="/" className="text-white text-xl block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-white text-xl block py-1">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white text-xl block py-1">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-white text-xl block py-1">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 mt-5 md:mt-0">
            <h3 className="text-3xl">Contact Info</h3>
            <ul className="list-none p-0 mt-3">
              <li className="text-xl flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Thailand
              </li>
              <li className="text-xl flex items-center">
                <FaPhone className="mr-2" /> +66-2-2134567
              </li>
              <li className="text-xl flex items-center">
                <FaEnvelope className="mr-2" /> socialchef@gmail.com
              </li>
              <li className="text-xl flex items-center pt-3">
                <Link to='https://www.facebook.com/'><FaFacebook className="mr-4 text-4xl" /></Link>
                <Link to='https://twitter.com/'><FaTwitter className="mr-4 text-4xl" /></Link>
                <Link to='https://www.instagram.com/'><FaInstagram className="mr-4 text-4xl" /> </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center pt-2 text-2xl">
          &copy; 2023 Sportz Car. Developed by <span className="text-success">Shimul Chandra Das</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

