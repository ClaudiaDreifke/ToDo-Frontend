import React, {useEffect, useState} from 'react';
import './styling/App.css';
import ShowToDoList from "./components/ShowToDoList";
import useTodo from "./useTodo/useTodo";


function App() {

    const {
        toDoItems,
        newItem,
        setNewItem,
        addToDo,
        updateToDoStatus,
        deleteToDo,
        showMeDetails
    } = useTodo()

    return (
        <body>
        <h1>Our awesome To-Do-App</h1>
        <div className={"createItem"}>
            <input type="text" onChange={(event) => setNewItem(event.target.value)}/>
            <button onClick={(event) => {
                addToDo(newItem);
            }}>Create
            </button>
            <ShowToDoList toDoItems={toDoItems} updateToDoStatus={updateToDoStatus} deleteToDo={deleteToDo}
                          showMeDetails={showMeDetails}/>
        </div>
        </body>
    );
}

export default App;
