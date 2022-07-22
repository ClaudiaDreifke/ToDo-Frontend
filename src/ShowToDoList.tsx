import {ToDoItem} from "./ToDoItem";
import ShowToDo from "./ShowToDo";

type ShowToDoListProps={
    toDoItems:ToDoItem[],
    updateToDoStatus: (updatedToDoItem:ToDoItem) => void
}

export default function ShowToDoList(props:ShowToDoListProps){


    return(
        <div>
        <div className={"Items"}>
            {props.toDoItems.map((item)=>{
                if(item.status==="OPEN")
                return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus}
                                                            key={item.id}/>)})}
        </div>
        <div className={"InProgress"}>
            {props.toDoItems.map((item)=>{
                if(item.status==="IN_PROGRESS")
                    return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus}
                                      key={item.id}/>)})}
        </div>
            <div className={"DONE"}>
                {props.toDoItems.map((item)=>{
                    if(item.status==="DONE")
                        return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus}
                                          key={item.id}/>)})}
            </div>
         </div>


    )

}