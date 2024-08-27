/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image from "../images/coding-on-a-computer.jpg";

const imageAltText = " laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " Banking Management System 🎉",
    description:
      "Automated teller Machine simulator is a sysyem that helps the user to contract and carryout the seamless transactions",
    url: "https://github.com/ankit-gusain/banking-management-system",

  },
  {
    title: " Best projects for JavaScript Foundation",
    description: "developed some of the best projects that solidify the ones javascript foundation",
    url: "https://github.com/ankit-gusain/js-and-projects",
  },
  {
    title: "React based Projects",
    description:
      "Welcome to the React Projects showcasing a variety of projects built with React, a powerful JavaScript library for building user interfaces. Whether you're a beginner learning the basics or an experienced developer exploring advanced",
    url: "https://github.com/ankit-gusain/ankit-and-react",
  },
  {
    title: "learn web dev",
    description: "Welcome to the world of web development! Whether you're a complete beginner or looking to expand your skills, web development offers a dynamic and rewarding path. Here, you'll learn to build websites and web applications using key technologies and tools.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
