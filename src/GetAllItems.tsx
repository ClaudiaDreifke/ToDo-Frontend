import {useEffect} from "react";
import axios from "axios";
type
export default function GetAllItems(){


    useEffect(()=> {
            axios.get("/api/todo")
                .then((response) => {
                    return response.data
                })
                .then((data) => {
                    setToDoItems(data);

                })
                .catch((error) => {
                    console.log(error)
                })
        },[]
    )
}