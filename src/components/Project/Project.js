import React from "react";
import { StyleWrapper } from "./Project.styled";

import { useSelector } from "react-redux";


const Project = () => {
  const projects = useSelector((state) => state.projects);
  return (
    <StyleWrapper
      className=" d-flex flex-column align-items-center"
      id="projects"
    >
      
      <h1>Personal Projects</h1>
      
      <div className="d-flex w-100 justify-content-center flex-wrap">
        {projects.map((item) => {
          return (
            
            <div
              className="d-flex flex-column project-card mx-5 my-3"
              key={item.projectName}
            >
              
              <img src={item.imageUrl} alt="projectImage" />
              <div className="d-flex tech flex-row flex-wrap">
                {item.techStack.map((tech) => {
                  return <h6 key={tech}>{tech}</h6>;
                })}
              </div>
              <h4>{item.projectName}</h4>
              <p>{item.description}</p>
              
            </div>
          );
        })}
      </div>
      
    </StyleWrapper>
  );
};

export default Project;
