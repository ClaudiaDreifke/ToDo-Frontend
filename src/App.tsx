import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ToDoItem} from "./ToDoItem";
import axios from "axios";
import ShowToDoList from "./ShowToDoList";
import SendNewItem from "./SendNewItem";

function App() {
    const [toDoItems,setToDoItems]=useState<ToDoItem[]> ([]);
    const [newItem,setNewItem]=useState<string>("");
    const [newItemCreated,setNewItemCreated]=useState<boolean>(true);
    useEffect(()=> {
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
    },[newItemCreated]
    )
    console.log(toDoItems);
    return (
        <div>
            <h1>Unsere wunderbare ToDoApp</h1>

            <ShowToDoList toDoItems={toDoItems}/>





    <input type="text" onChange={(event)=> setNewItem(event.target.value)}/>

            <button onClick={(event)=>{ SendNewItem({description:newItem});
            }}  >CreateItem</button>



    </div>
  );
}

export default App;
