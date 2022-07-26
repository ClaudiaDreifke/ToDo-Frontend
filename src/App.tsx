import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
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

    const [description, setDescription] = useState<string>("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const onTodoSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addToDo(description)
        setDescription("")
    }

    return (
        <body>
        <h1>Our awesome To-Do-App</h1>
        <form onSubmit={onTodoSubmit}>
            <input onChange={onDescriptionChange} value={description}/>
            <button type={"submit"}>Create</button>
        </form>
            <ShowToDoList toDoItems={toDoItems} updateToDoStatus={updateToDoStatus} deleteToDo={deleteToDo}
                          showMeDetails={showMeDetails}/>

        </body>
    );
}

export default App;