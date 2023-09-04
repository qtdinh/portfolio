import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>
            <Link to="/">
              <span className="fa-solid fa-cat" aria-hidden="true"></span>{" "}
              <span>Thomas Dinh</span>
            </Link>
          </h1>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thomas-dinh-404275231">
            <span className="fab fa-linkedin" aria-hidden="true"></span>{" "}
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/qtdinh/">
            <span className="fa-brands fa-github" aria-hidden="true"></span>
            <span className="sr-only">Github</span>
          </a>
        </li>
        <li>
          <Link to="/" className="button">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
