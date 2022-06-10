import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import AddNewTask from "./AddNewTask";
import Button from "./Button";
import Task from "./Task";
import ProjectContext from "../context/Project/ProjectContext";

const ProjectList = ({ id, tasks, name }) => {
  const { deleteProject } = useContext(ProjectContext);

  const handleProjectDelete = () => deleteProject(id)


  return (
    <Grid item sm={3}>
      <Card>
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Button onClick={handleProjectDelete} label="delete project"></Button>
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              projectId={id}
              tittle={task.tittle}
              description={task.description}
            />
          ))}
          <AddNewTask id={id} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProjectList;
