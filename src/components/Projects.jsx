import React from "react";
import Slider from "react-slick";
import "../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectBox = ({ image, text }) => {
  return (
    <div className="project-box">
      <img src={image} alt="Project" className="project-image" />
      <div className="project-text">{text}</div>
    </div>
  );
};

const Projects = ({ projects }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="projects">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectBox key={index} image={project.image} text={project.text} />
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
