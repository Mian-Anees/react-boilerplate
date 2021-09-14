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
            dispatch(changeName({Name:"ne12w"}))
            dispatch(changeNo({No:"22"}))
            }}>
            click
        </button>
        <p>
            hi
            {No}--mmmm--{Name}
        </p>
        <div>
            123
            {No}
        </div>
        {/* <Cards/> */}
    </>
    )
}