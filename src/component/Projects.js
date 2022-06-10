import { Grid } from "@mui/material";
import ProjectContext from "../context/Project/ProjectContext";
import React, { useContext } from "react";
import ProjectList from "./ProjectList";
import AddNewProject from "./AddNewProject";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  console.log(projects);

  return (
    <Grid container gap={3}>
      {projects.map((project) => {
        return (
          <ProjectList
            key={project?.id}
            id={project?.id}
            tasks={project?.tasks}
            name={project?.name}
          />
        );
      })}
      <AddNewProject />
    </Grid>
  );
};

export default Projects;
