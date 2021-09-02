import { changeName, changeNo } from "../redux/sampleSlice/sample";
import { useDispatch, useSelector } from "react-redux"

import { Cards } from "./card";
import {React} from "react"

export const Dashboard = ()=>{
   const dispatch = useDispatch();
    const {Name,No} =useSelector(state=>state)
    return (
    <>
        <h1>
            Hello World
        </h1>
        <button onClick={()=>{
            dispatch(changeName({Name:"new"}))

            dispatch(changeNo({No:"21"}))
            }}>
            click
        </button>
        <p>
            {Name}={No}
          
        </p>   
        <Cards/>
        
    </>
    )
}