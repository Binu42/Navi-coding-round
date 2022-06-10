import { Grid, Card, CardContent } from "@mui/material";
import React, { useContext, useState } from "react";
import Button from "./Button";
import TextInput from "./Form/TextInput";
import ProjectContext from "../context/Project/ProjectContext";

const AddNewProject = () => {
  const [projectName, setProjectName] = useState("");
  const { addNewProject } = useContext(ProjectContext);

  const handleFieldChange = (e)=> {
      setProjectName(e.target.value);
  }

  const handleAddNewProject = () => {
    addNewProject(projectName);
    setProjectName("")
  };

  return (
    <Grid item sm={3}>
      <Card>
        <CardContent>
          <TextInput
            label="Title"
            value={projectName}
            onChange={handleFieldChange}
            placeholder="Enter Project Tittle"
            required
          />
          <Button onClick={handleAddNewProject} label="Add New project" />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AddNewProject;
