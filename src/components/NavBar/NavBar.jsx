import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import style from "../../App.css";



const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link to={"/"} className="text-center fs-3 fw-bold navbar-brand">
          Rick and Morty <span className="text-primary">Wiki</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <style jsx="ture">
                {`
                button[aria-expanded="false"] > .close{
                    display: none;
                }
                button[aria-expanded="true"] > .open{
                    display: none;
                }
                `}
            </style>
          <i className="fas fa-bars open fw-bold text-black"></i>
          <i className="fas fa-times close fw-bold text-black"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink  className="nav-link" aria-current="page" to={"/"}>
            Characters
            </NavLink>
            <NavLink  className="nav-link" to={"/episode"}>
              Episode
            </NavLink>
            <NavLink  className="nav-link" to={"/location"}>
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar