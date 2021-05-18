import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Tasks() {
    const [tasks,setTasks] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            setTasks(res.data);
        })
    }, [])

    const tasksJSX = tasks.map(task => {
        return (
        <tr>
            <th scope="row">{task.userId}</th>
            <td>{task.id}</td>
            <td>{task.title}</td>
            <td>{task.completed}</td>
        </tr>
        )
    })


    return (
        <div>
            <h1>Tu as une tache... Pistache!!</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Numéro</th>
                        <th scope="col">titre</th>
                    </tr>
                </thead>
                <tbody>
                   {tasksJSX}
                </tbody>
                </table>
        </div>
    )
}
