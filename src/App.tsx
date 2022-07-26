import React, {ChangeEvent, FormEvent, useState} from 'react';
import './styling/App.css';
import ShowToDoList from "./components/ShowToDoList";
import useTodo from "./useTodo/useTodo";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import FilterToDoList from "./components/FilterToDoList";



function App() {

    const {
        toDoItems,
        addToDo,
        updateToDoStatus,
        deleteToDo,
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
        <HashRouter>
        <h1>Our awesome To-Do-App</h1>

        <form onSubmit={onTodoSubmit}>
            <input onChange={onDescriptionChange} value={description}/>
            <button className={"create-button"} type={"submit"}>Create</button>
        </form>
            <nav>
            <NavLink className= {"home-link"} to={"/"}>Show all</NavLink>
            </nav>
          <Routes>
              <Route path={"/"} element={<ShowToDoList toDoItems={toDoItems} updateToDoStatus={updateToDoStatus} deleteToDo={deleteToDo}/>}/>
              <Route path={"/open"} element = {<FilterToDoList toDoItems={toDoItems} status={"OPEN"} updateToDoStatus={updateToDoStatus} deleteToDo={deleteToDo} /> }/>
              <Route path={"/inProgress"} element ={<FilterToDoList toDoItems={toDoItems} status={"IN_PROGRESS"} updateToDoStatus={updateToDoStatus} deleteToDo={deleteToDo}/>}/>
              <Route path={"/done"} element ={<FilterToDoList toDoItems={toDoItems} status={"DONE"} updateToDoStatus={updateToDoStatus} deleteToDo={deleteToDo}/>}/>
          </Routes>

        </HashRouter>
    );
}

export default App;