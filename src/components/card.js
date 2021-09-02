import { changeName, changeNo } from '../redux/sampleSlice/sample';
import { useDispatch, useSelector } from 'react-redux';

import {React} from 'react'

export const Cards = ()=>{
    
    const dispatch=useDispatch()
    const {No,Name} = useSelector(state=>state)
    return (
        <>
            <p>
             ================ 
            </p>
            <button onClick={()=>{
                dispatch(changeNo({No:100}))
                dispatch(changeName({Name:"test"}))
            }}>
                click here
            </button>
            <p>
             ================ 
            </p>
        </>
    )
}