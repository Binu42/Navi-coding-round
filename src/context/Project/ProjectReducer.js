import {
  ADD_NEW_PROJECT,
  ADD_NEW_TASK,
  DELETE_PROJECT,
  DELETE_PROJECT_TASK,
} from "../types";
import { v4 as uuid } from 'uuid';

export default (state, action) => {
  const { type, payload } = action;
  console.log("context", payload);
  switch (type) {
    case ADD_NEW_PROJECT:
      return {
        ...state,
        projects: [
          ...state.projects,
          {
            id: uuid(),
            name: payload,
            tasks: []
          },
        ],
      };

    case ADD_NEW_TASK:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === payload.id) {
            return {
              ...project,
              tasks: [
                ...project.tasks,
                {
                  id: uuid(),
                  tittle: payload.tittle,
                  description: payload.description,
                },
              ],
            };
          }
          return project;
        }),
      };
    case DELETE_PROJECT:
      return {
        state,
        projects: state.projects.filter((project) => project.id !== payload) || [],
      };

    case DELETE_PROJECT_TASK:
        const projects = state.projects.map(project => {
            if(project.id===payload.projectId){
                return {
                    ...project,
                    tasks: project.tasks.filter(task => task.id !== payload.taskId) || []
                }
            }
            return project;
        })
      return {
        state,
        projects
      };

    default:
      return state;
  }
};
