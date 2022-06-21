import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <>
      <header className="App">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    aria-current="page"
                    to="/register2"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/login2">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/create_employees">
                    Create Employees
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/curdoperation">
                    Employees Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </header>

    </>
  );
}
