import React, {useEffect, useState} from 'react';
import './App.css';
import {ToDoItem} from "./ToDoItem";
import axios from "axios";
import ShowToDoList from "./ShowToDoList";


function App() {
    const [toDoItems,setToDoItems]=useState<ToDoItem[]> ([]);
    const [newItem,setNewItem]=useState<string>("");

    const getAllToDos=()=>{
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

    const addToDo=(description:string)=>{
        const newItem:ToDoItem={
            id:"",
            description: description,
            status:"OPEN",
        }

        axios.post("/api/todo",newItem)
            .then((response) => {console.log( response.data)})
            .then((response)=>{getAllToDos()})
            .catch((error) => {console.log(error)})
    }

    const updateToDoStatus=(updatedToDoItem:ToDoItem)=>{
        let updatedItem:ToDoItem= {
            id: updatedToDoItem.id,
            description: updatedToDoItem.description,
            status: updatedToDoItem.status
        }

        if(updatedToDoItem.status === "OPEN"){
            updatedItem.status = "IN_PROGRESS"
        }
        else if (updatedToDoItem.status === "IN_PROGRESS"){
            updatedItem.status="DONE"
        }

        axios.put("/api/todo/{id}/update",updatedItem)
            .then((response) => {console.log( response.data)})
            .then((response)=>{getAllToDos()})
            .catch((error) => {console.log(error)})

    }



    useEffect(()=> {
        getAllToDos()
    },[]
    )
    console.log(toDoItems);

    return (
        <div>
            <h1>Unsere wunderbare ToDoApp</h1>
            <ShowToDoList toDoItems={toDoItems} updateToDoStatus={updateToDoStatus}/>

    <input type="text" onChange={(event)=> setNewItem(event.target.value)}/>

            <button onClick={(event)=>{ addToDo(newItem);
            }}  >Create Item</button>


    </div>
  );
}

export default App;
