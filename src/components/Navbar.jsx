import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { searchUser } from "../features/userDetailsSlice";

const Navbar = () => {
  const allUsers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  const isSearchDisabled = location.pathname !== "/read";
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <div className="container">
          <Link to="/" className="navbar-brand ">
            Redux CRUD APP
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fs-16"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link ">
                  Create User
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/read" className="nav-link ">
                  {allUsers.length === 0
                    ? "All Users"
                    : `All Users (${allUsers.length})`}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex desktop-only">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search User By name"
              aria-label="Search"
              onChange={(e) => setSearchData(e.target.value)}
              disabled={isSearchDisabled}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
