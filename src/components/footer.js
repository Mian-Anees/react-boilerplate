import {React} from 'react';
import logo from '../assets/logo/logoipsum-logo-5.svg'
export const Footer=()=>{
     return (
<div style = {{ display: 'flex', width: '100%' ,height:'100%', backgroundColor:'gray',flexDirection:'column'}}>
        <img src={logo} style={{display:'flex',flex:'0.4',justifyContent:'center'}} >
        </img>
        <p style={{display:'flex',flex:'0.15',justifyContent:'center'}}>
            Contact us
        </p>
        <p style={{flex:'0.15',display:'flex',justifyContent:'center'}}>
            email:hr@gmail.com
        </p>
</div>

     )
}