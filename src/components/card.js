import { changeName, changeNo } from '../redux/sampleSlice/sample';
import { useDispatch, useSelector } from 'react-redux';

import {React} from 'react'

const styleObject = {
    "display":"flex",
    "flexDirection":"row",
    "fontSize" : "80px",
    // "height" : "15%",
    // "width" : "10%",
    "margin":"10%",
    "padding":"10%",
    "backgroundColor":"#99f000"
}
export const Cards = ()=>{
    
    const dispatch=useDispatch()
    const {No,Name} = useSelector(state=>state)
    return (
        <>
            <div style={styleObject} >
                    <div style={{backgroundColor:"blue","flex":0.5}}>
                        <div >123</div>
                    </div>
                    <div style={{backgroundColor:"red","flex":0.5}}>
                        <div >123</div>
                    </div>
            </div>
        </>
    )
}