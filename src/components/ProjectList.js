import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {projects.map((projects) =>(
        <ProjectItem key={projects.id} {...projects} />
      ))}
      </div>
    </div>
  );
}

export default ProjectList;
