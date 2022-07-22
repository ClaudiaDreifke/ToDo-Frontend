import {ToDoItem} from "./ToDoItem";
import {useEffect} from "react";
import axios from "axios";


export default function SendNewItem(props: { description:string })
{
    let newItem:ToDoItem={
        id:"",
        description:props.description,
        status:"OPEN",
    }

             axios.post("/api/todo",newItem)
                .then((response) => {
                    console.log( response.data)
                })


                .catch((error) => {
                    console.log(error)
            })

  }