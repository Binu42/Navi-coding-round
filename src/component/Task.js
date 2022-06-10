import React, { useContext } from "react";
import { CardContent, Card, Typography, CardActions } from "@mui/material";
import Button from "./Button";
import ProjectContext from "../context/Project/ProjectContext";

const Task = ({ tittle, description, id: taskId, projectId }) => {
  const { deleteTaskFromProject } = useContext(ProjectContext);

  const removeTask = () => {
    deleteTaskFromProject({taskId, projectId })
  }

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={removeTask} label="Remove task"/>
      </CardActions>
    </Card>
  );
};

export default Task;
