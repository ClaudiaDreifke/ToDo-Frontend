import {ToDoItem} from "../model/ToDoItem";


type ShowDetailsProps = {
    id: string,
    description: string,
    status: string
}

export default function ShowDetails(props: ShowDetailsProps){

    return (
    <div className={"showDetails"}>
        <p className={"id"}>{props.id}</p>
        <p className={"description"}>{props.description}</p>
        <p className={"status"}>{props.status}</p>

    </div>
    )
}