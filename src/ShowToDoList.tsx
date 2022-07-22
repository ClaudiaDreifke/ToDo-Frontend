import {ToDoItem} from "./ToDoItem";
import ShowToDo from "./ShowToDo";

export default function ShowToDoList(props:{toDoItems:ToDoItem[]}){


    return(
        <div>
        <div className={"Items"}>
            {props.toDoItems.map((item)=>{
                if(item.status==="OPEN")
                return (<ShowToDo toDoItem={item}
                                                            key={item.id}/>)})}
        </div>
        <div className={"InProgress"}>
            {props.toDoItems.map((item)=>{
                if(item.status==="IN_PROGRESS")
                    return (<ShowToDo toDoItem={item}
                                      key={item.id}/>)})}
        </div>
            <div className={"DONE"}>
                {props.toDoItems.map((item)=>{
                    if(item.status==="DONE")
                        return (<ShowToDo toDoItem={item}
                                          key={item.id}/>)})}
            </div>
         </div>


    )

}