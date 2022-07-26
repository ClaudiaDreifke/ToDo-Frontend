import {ToDoItem} from "../model/ToDoItem";
import "../styling/ShowToDo.css"

type ShowToDoProps = {
    toDoItem: ToDoItem
    updateToDoStatus: (updatedToDoItem: ToDoItem) => void,
    deleteToDo: (id: string) => void,
}

export default function ShowToDo(props: ShowToDoProps) {

    return (
        <div className={"showToDo"}>
            <p className={"description"}>{props.toDoItem.description}</p>
           <form className={"showToDo-form"}>
               <button onClick={() => props.deleteToDo(props.toDoItem.id)}>Delete</button>
            {props.toDoItem.status !== "DONE" &&
                <button onClick={() => props.updateToDoStatus(props.toDoItem)}>Advance</button>}
           </form>
        </div>
    )
}