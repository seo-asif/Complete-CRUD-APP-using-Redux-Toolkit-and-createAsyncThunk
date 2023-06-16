import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand mt-2">
            <Link to="/" className="nav-link ">
              Redux CRUD APP
            </Link>
          </h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create User
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All User
                </Link>
              </li>
            </ul>
            <input
              className="form-control me-2 w-50 outline:none"
              type="search"
              placeholder="Search User"
              aria-label="Search"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
