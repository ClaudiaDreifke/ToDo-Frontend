import {ToDoItem} from "./ToDoItem";

type ShowToDoProps = {
    toDoItem:ToDoItem
    updateToDoStatus: (updatedToDoItem:ToDoItem) => void
}
export default function ShowToDo(props:ShowToDoProps){
    return(
    <div>
         <p>{props.toDoItem.description}</p>
            <p>Status:{props.toDoItem.status}</p>
        <button onClick={(event)=> props.updateToDoStatus(props.toDoItem)}/>
    </div>
    )
}