import {React} from 'react';
import logo from '../assets/logo/logoipsum-logo-5.svg'
export const Footer=()=>{
     return (
      

<div style = {{ display: 'flex', width: '100%' ,height:'100%', backgroundColor:'white',flexDirection:'row',bottom:'10px'}}>
<div style={{flex:'1',display:'flex',justifyContent:'center',}} >
    <div >
        <img src={logo} style={{height:'100%'}} >
        </img>
        <h1 style={{ fontWeight:'bold',height:'40%'}}>
            Hello World!
        </h1>
        <p style={{flex:'1',display:'flex',justifyContent:'center'}}>
            Contact us
        </p>
        <p style={{flex:'1',display:'flex',justifyContent:'center',marginBottom:'5px'}}>
            email:hr@gmail.com
        </p>
    </div>
</div>  

</div>

     )
}