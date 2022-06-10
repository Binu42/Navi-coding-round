import { Card, CardContent } from "@mui/material";
import React, { useContext, useState } from "react";
import Button from "./Button";
import TextInput from "./Form/TextInput";
import ProjectContext from "../context/Project/ProjectContext";

const initialState = { tittle: "", description: "" };
const AddNewTask = ({id}) => {
  const [form, setForm] = useState(initialState);
  const { addNewTaskInProject } = useContext(ProjectContext);

 const handleForm = (e) => {
     const {name, value} = e.target
     setForm(data => ({...data, [name]: value}))
 }

  const handelAddNewTask = () => {
    addNewTaskInProject({id, ...form});
    setForm(initialState)
  };

  return (
      <Card>
        <CardContent>
          <TextInput
            label="Title"
            name="tittle"
            value={form.tittle}
            onChange={handleForm}
            placeholder="Enter Project Tittle"
          />
          <TextInput
            label="description"
            name="description"
            value={form.description}
            onChange={handleForm}
            placeholder="Enter Project desc"
            multiline
          />
          <Button onClick={handelAddNewTask} label="Add New Task" />
        </CardContent>
      </Card>
  );
};

export default AddNewTask;
