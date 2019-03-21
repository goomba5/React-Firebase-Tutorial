import React, { Component } from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>Duh stuff</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Dredgen Yor</div>
          <div>March 21, 2018</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
