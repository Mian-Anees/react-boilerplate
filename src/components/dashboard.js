import { changeName, changeNo } from "../redux/sampleSlice/sample";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useParams } from "react-router-dom"

import { Cards } from "./card";
import {React} from "react"

export const Dashboard = ()=>{
    const history = useHistory()
    const location = useLocation()
    const {userId} =  useParams()
   const dispatch = useDispatch();
    const {Name,No} =useSelector(state=>state)
    console.log({userId})
    return (
        <div >
           <Cards/> 
        </div>
    )
}