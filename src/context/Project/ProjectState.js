import React, { useReducer, useEffect } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';

import {
  ADD_NEW_PROJECT,
  ADD_NEW_TASK,
  DELETE_PROJECT,
  DELETE_PROJECT_TASK
} from '../types';

const ProjectState = props => {
  const intialState = {
      projects: JSON.parse(localStorage.getItem("projects")) || []
  }

  const [state, dispatch] = useReducer(ProjectReducer, intialState);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(state.projects));
  }, [state.projects])

  // add New project
  const addNewProject = projectName => {
    dispatch({
      type: ADD_NEW_PROJECT,
      payload: projectName
    })
  }

  const addNewTaskInProject = payload => {
    dispatch({
      type: ADD_NEW_TASK,
      payload
    })
  }

  const deleteProject = projectId => {
      dispatch({
          type: DELETE_PROJECT,
          payload: projectId
      })
  }

  const deleteTaskFromProject = (payload)=> {
    dispatch({
        type: DELETE_PROJECT_TASK,
        payload: payload
    })
  }

  return <ProjectContext.Provider value={{
    projects: state.projects,
    deleteProject,
    deleteTaskFromProject,
    addNewProject,
    addNewTaskInProject
  }}>
    {props.children}
  </ProjectContext.Provider>
}
export default ProjectState;
