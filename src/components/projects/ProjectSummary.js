import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by Dredgen Yor</p>
        <p className="grey-text">March 21, 2018 at 4:11pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
