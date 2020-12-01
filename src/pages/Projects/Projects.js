import React from "react";
import { Link } from "react-router-dom";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projectEl">
        <Link className="projectElLink" to="/mountains">
          <div className="projectElImage projectElImageMountains"></div>
          <h3>Góry</h3>
        </Link>
      </div>
      <div className="projectEl">
        <Link className="projectElLink" to="/travels">
          <div className="projectElImage projectElImageTravels"></div>
          <h3>Podróże</h3>
        </Link>
      </div>
      <div className="projectEl">
        <Link className="projectElLink" to="/poland">
          <div className="projectElImage projectElImagePoland"></div>
          <h3>Polska</h3>
        </Link>
      </div>
      <div className="projectEl">
        <Link className="projectElLink" to="/cats">
          <div className="projectElImage projectElImageCats"></div>
          <h3>Koty</h3>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
