import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="About">

      <div className="gradient"></div>
      <div className="section-blue">
        <section id="projects">
          <h2>About Thomas Dinh</h2>
          <article>
            <div className="text">
              <h3>Just the highlights</h3>
              <p className="blackbox">
                Description of the project. This should be fairly concise while
                also describing the key components that you developed or worked
                on. It can be as long as you need it to be but should at least
                be a few sentences long. Be sure to include specific links
                anywhere in the description. A link looks like{" "}
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/">
                  this
                </a>
                , and multiple links look <a href="/">like this</a> and{" "}
                <a href="/">like this</a>.
              </p>
              <h4>My favorite technologies include:</h4>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <img
              src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
              alt="Screenshot of the Wall of Wonder."
            />
          </article>
        </section>
      </div>
      <div className="gradient"></div>

      
    </div>
  );
};

export default About;
