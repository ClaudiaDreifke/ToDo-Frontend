import {ToDoItem} from "../model/ToDoItem";
import ShowToDo from "./ShowToDo";
import "../styling/ShowToDoList.css"
import {NavLink} from "react-router-dom";

type ShowToDoListProps = {
    toDoItems: ToDoItem[],
    updateToDoStatus: (updatedToDoItem: ToDoItem) => void,
    deleteToDo:(id:string)=>void,
}

export default function ShowToDoList(props: ShowToDoListProps) {



    return (
        <div className={"showToDoList"}>
            <div className={"open"}>
                <NavLink className={"status-link"} to={"/open"}>TO-DO</NavLink>
                {props.toDoItems.map((item) => {
                    if (item.status === "OPEN")
                        return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus} deleteToDo={props.deleteToDo}
                                          key={item.id}/>)
                })}
            </div>
            <div className={"inProgress"}>
                <NavLink className={"status-link"} to={"/inProgress"}>DOING</NavLink>
                {props.toDoItems.map((item) => {
                    if (item.status === "IN_PROGRESS")
                        return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus} deleteToDo={props.deleteToDo}
                                          key={item.id}/>)
                })}
            </div>
            <div className={"done"}>
                <NavLink className={"status-link"} to={"/done"}>DONE</NavLink>
                {props.toDoItems.map((item) => {
                    if (item.status === "DONE") {
                        return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus} deleteToDo={props.deleteToDo}
                                          key={item.id}/>)
                    }
                })}
            </div>
        </div>


    )

}