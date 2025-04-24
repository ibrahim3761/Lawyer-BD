import React from "react";
import footlogo from "../../assets/logo-footer.png";
import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const links = (
    <>
      <li className="lg:mr-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="lg:mr-4">
        <NavLink
          to="/my-bookings"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          My Bookings
        </NavLink>
      </li>
      <li className="lg:mr-4">
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
      <aside>
        <h1 className="flex justify-center text-center items-center text-2xl">
          <img src={footlogo} alt="" />
          Law.BD
        </h1>
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </aside>
      <div className="border-dashed border-t border-gray-500 pt-5 w-full">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/Ibrahim376146ab/" target="_blank">
              <FaFacebook className="text-blue-600" size={25} />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-ibrahim-abdullah/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC9YezwBllLrtZJxJ_66KvkpEykfrOtYqAc"
              target="_blank"
            >
              {" "}
              <FaLinkedin size={25} className="text-blue-900" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
