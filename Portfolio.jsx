import React from "react";
import Contact from "./Contact";

const Portfolio = () => {
    return (
      <div className="Portfolio">
        <section id="intro">
          <p className="name">
            Hi, my name is <span>Thomas Dinh.</span>
          </p>
  
          <h2>
            I develop the front end of websites to create pleasant user experiences and interfaces.
          </h2>
  
          <p>
            I'm a student at California State University, Northridge specializing in front-end web development.
          </p>
  
          <p>
            Currently, I'm looking for internships and opportunities to develop my career and bolster my <a href="https://github.com/qtdinh">resume.</a>
          </p>
        </section>
        <div className="gradient"></div>
        <div className="section-blue">
          <section id="projects">
            <h2>Projects I'm proud of</h2>
            <article>
              <div className="text">
                <h4>Latest Project</h4>
                <h3>Wall of Wonder</h3>
                <p className="blackbox">
                Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere
        in the description. A link looks like <a href="https://frontendmasters.github.io/bootcamp/mole">this</a>, and multiple links look <a href="/">like this</a> and  <a href="/">like this</a>.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SVG</li>
                </ul>
              </div>
              <img
                src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                alt="Screenshot of the Wall of Wonder."
              />
            </article>
            <div className="gradient"></div>
            <article className="reverse">
              <div className="text">
                <h4>Bootcamp Project</h4>
                <h3>Feed-A-Star-Mole Game</h3>
                <p className="blackbox">Description of the project. This should be fairly concise while also describing the key components that you developed or worked on. It can be as long as you need it to be but should at least be a few sentences long. Be sure to include specific links anywhere
        in the description. A link looks like <a href="https://frontendmasters.github.io/bootcamp/mole">this</a>, and multiple links look <a href="/">like this</a> and  <a href="/">like this</a>.</p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <img
                src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                alt="Screenshot of the Feed-A-Star-Mole Game."
              />
            </article>
          </section>
        </div>
        <div className="gradient"></div>
        <div className="section-plum">
          <section id="contact">
            <Contact />
          </section>
          <div className="gradient"></div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;