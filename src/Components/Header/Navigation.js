import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
  return (
    <nav className="navbar p-3 navbar-expand-lg navbar-dark bg-black">
    <h1> <Link className="navbar-brand" to="/">selfDev</Link></h1> 
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         
        </ul>
        <form className="form-inline bg-Dark my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navigation;
