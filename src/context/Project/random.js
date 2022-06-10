// code explanation no use of it

{
    projects: [
        {
            id: "dsklaf",
            name: "project name",
            tasks: [
                {
                    id: "some id",
                    tittle: "task 1",
                    description: "description"
                },
            ]
        },
        {
            id: "dsklaf",
            name: "project name",
            tasks: [
                {
                    id: "some id",
                    tittle: "task 1",
                    description: "description"
                },
            ]
        }
    ]
}

function deleteTaskFromProject(taskId, projectId) {
    projects.map(project => {
        if(project.id === projectId){
            
            return {
                ...project,
                tasks: project.tasks.filter(task => task.id !== taskId) || []
            }
        }
        return project;
    })
}