import {ToDoItem} from "./ToDoItem";
import "./ShowToDo.css"

type ShowToDoProps = {
    toDoItem: ToDoItem
    updateToDoStatus: (updatedToDoItem: ToDoItem) => void,
    deleteToDo:(id:string)=>void,
    showMeDetails:(id:string) =>void
}

export default function ShowToDo(props: ShowToDoProps) {

    return (
        <div className={"showToDo"}>
                     <p className={"description"}>{props.toDoItem.description}</p>

                <button onClick={(event)=> props.showMeDetails(props.toDoItem.id)}>Details</button>
                <button onClick={(event) => props.deleteToDo(props.toDoItem.id)}>Delete</button>
                {props.toDoItem.status !== "DONE" && <button onClick={(event) => props.updateToDoStatus(props.toDoItem)}>Advance</button>}

        </div>
    )
}