import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default function Header({ siteTitle }) {
  return (
    <div className="border-teal-lighter border-t-4">
      <nav className="flex items-center justify-between flex-wrap p-6 font-sans">
        <div className="mr-6 text-teal-dark hover:text-teal-light">
          <Link to="/">{siteTitle}</Link>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto text-teal justify-end">
          <div className="text-sm">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-light mr-4"
      activeClassName="border-b-2 border-teal hover:border-teal-light"
      children={children}
    />
  );
}
