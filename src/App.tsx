import React, {useEffect, useState} from 'react';
import './App.css';
import {ToDoItem} from "./ToDoItem";
import axios from "axios";
import ShowToDoList from "./ShowToDoList";
import ShowDetails from "./ShowDetails";


function App() {
    const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
    const [newItem, setNewItem] = useState<string>("");


    const getAllToDos = () => {
        axios.get("/api/todo")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setToDoItems(data);

            })
            .catch((error) => {
                console.log(error)
            })

    }

    const addToDo = (description: string) => {
        const newItem: ToDoItem = {
            id: "",
            description: description,
            status: "OPEN",
        }

        axios.post("/api/todo", newItem)
            .then((response) => {
                console.log(response.data)
            })
            .then((response) => {
                getAllToDos()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const updateToDoStatus = (toDoItem: ToDoItem) => {
        let updatedItem: ToDoItem = {
            id: toDoItem.id,
            description: toDoItem.description,
            status: toDoItem.status
        }

        if (toDoItem.status === "OPEN") {
            updatedItem.status = "IN_PROGRESS"
        } else if (toDoItem.status === "IN_PROGRESS") {
            updatedItem.status = "DONE"
        }

        axios.put("/api/todo/{id}/update", updatedItem)
            .then((response) => {
                console.log(response.data)
            })
            .then((response) => {
                getAllToDos()
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const deleteToDo = (id:string) => {

        axios.delete(`/api/todo/${id}`)
            .then((response) => {
                console.log(response.data)})
            .then(getAllToDos)
                .catch((error) => {console.log(error)})
    }

    const showMeDetails = (id:string) => {
        axios.get(`/api/todo/${id}`)
            .then((response) => {
                return response.data
            })
            .then((data) => {
            return ShowDetails})
            .catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
            getAllToDos()
        }, []
    )
    console.log(toDoItems);

    return (
        <body>
        <h1>Our awesome To-Do-App</h1>
        <div className={"createItem"}>
            <input type="text" onChange={(event) => setNewItem(event.target.value)}/>
            <button onClick={(event) => {addToDo(newItem);}}>Create</button>
            <ShowToDoList toDoItems={toDoItems} updateToDoStatus={updateToDoStatus} deleteToDo={deleteToDo} showMeDetails={showMeDetails}/>
        </div>
        </body>
    );
}

export default App;
