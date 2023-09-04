import React from "react";

const Footer = () => {
    return (
        <div className="Footer">
            <footer>
            <h2>Thomas Dinh &middot; Student</h2>
            <ul>
            <li>
                <a href="https://www.linkedin.com/in/thomas-dinh-404275231">
                <span className="fab fa-linkedin" aria-hidden="true"></span>
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
                <a href="mailto: thomas98dinh@gmail.com">
                <span className="fa-solid fa-envelope"></span>
                <span className="sr-only">Email</span>
                </a>
            </li>
            </ul>
            <p>
            <small>&copy; 2023 Thomas Dinh. All rights reserved.</small>
            </p>
            </footer>
        </div>
    );
}

export default Footer;