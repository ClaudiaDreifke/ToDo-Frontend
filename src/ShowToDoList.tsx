import {ToDoItem} from "./ToDoItem";
import ShowToDo from "./ShowToDo";
import "./ShowToDoList.css"

type ShowToDoListProps = {
    toDoItems: ToDoItem[],
    updateToDoStatus: (updatedToDoItem: ToDoItem) => void,
    deleteToDo:(id:string)=>void,
    showMeDetails:(id:string) =>void
}

export default function ShowToDoList(props: ShowToDoListProps) {


    return (
        <div className={"showToDoList"}>
            <div className={"open"}>
                <p className={"headLine"}>TO-DO</p>
                {props.toDoItems.map((item) => {
                    if (item.status === "OPEN")
                        return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus} deleteToDo={props.deleteToDo} showMeDetails={props.showMeDetails}
                                          key={item.id}/>)
                })}
            </div>
            <div className={"inProgress"}>
                <p className={"headLine"}>DOING</p>
                {props.toDoItems.map((item) => {
                    if (item.status === "IN_PROGRESS")
                        return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus} deleteToDo={props.deleteToDo} showMeDetails={props.showMeDetails}
                                          key={item.id}/>)
                })}
            </div>
            <div className={"done"}>
                <p className={"headLine"}>DONE</p>
                {props.toDoItems.map((item) => {
                    if (item.status === "DONE") {
                        return (<ShowToDo toDoItem={item} updateToDoStatus={props.updateToDoStatus} deleteToDo={props.deleteToDo} showMeDetails={props.showMeDetails}
                                          key={item.id}/>)
                    }
                })}
            </div>
        </div>


    )

}