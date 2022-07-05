const API_URL = "https://my-json-server.typicode.com/josimarbt/simplescrum/tasks"

axios.get(API_URL)
.then( resp => fillTasks(resp.data) )
.catch( err => console.log(err) )

function fillTasks(data) {
    data.map( d => {
        let newTask = document.createElement('article')
        let taskTitle = document.createElement('h3')
        taskTitle.innerText = d.title

        let timeLimit = document.createElement('p')
        timeLimit.innerHTML = `<span>time limit: </span>${d.deadline}`

        newTask.appendChild(taskTitle)
        newTask.appendChild(timeLimit)

        let columnToDo = document.getElementById('toDoTasks')
        let columnInProgress = document.getElementById('inProgressTasks')
        let columnDone = document.getElementById('doneTasks')

        switch (d.state) {
            case "to-do":
                columnToDo.appendChild(newTask)
                break
            case "in-progress":
                columnInProgress.appendChild(newTask)
                break
            case "done-task":
                columnDone.appendChild(newTask)
                break
            default:
                break
        }
    })
}