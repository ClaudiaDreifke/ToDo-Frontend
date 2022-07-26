import {useEffect, useState} from "react";
import {ToDoItem} from "../model/ToDoItem";
import axios from "axios";
import ShowDetails from "../components/ShowDetails";

export default function useTodo() {
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
            .then(() => {
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
            .then(() => {
                getAllToDos()
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const deleteToDo = (id: string) => {

        axios.delete(`/api/todo/${id}`)
            .then((response) => {
                console.log(response.data)
            })
            .then(getAllToDos)
            .catch((error) => {
                console.log(error)
            })
    }

    const showMeDetails = (id: string) => {                 // wird aktuell nicht gebraucht!
        axios.get(`/api/todo/${id}`)
            .then((response) => {
                return response.data
            })
            .then((ShowDetails))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
            getAllToDos()
        }, []
    )

    return {toDoItems, newItem, setNewItem, getAllToDos, addToDo, updateToDoStatus, deleteToDo}
}