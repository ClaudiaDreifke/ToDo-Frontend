import {ToDoItem} from "./ToDoItem";

export default function ShowToDo(props:{toDoItem:ToDoItem}){
    return(
    <div>
         <p>{props.toDoItem.description}</p>
            <p>Status:{props.toDoItem.status}</p>
    </div>
    )
}