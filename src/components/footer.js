import {React} from 'react';

export const Footer=()=>{
     return (
      

<div style = {{ display: 'flex', width: '100%' ,height:'200px', backgroundColor:'white',flexDirection:'row',bottom:'10px',marginBottom:'20px'}}>
<div style={{flex:'1',display:'flex',justifyContent:'center',}} >
    <div >
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'style={{height:'60%'}} >
        </img>
        <h1 style={{ fontWeight:'bold',height:'40%'}}>
            Hello World!
        </h1>
        <p style={{flex:'1',display:'flex',justifyContent:'center'}}>
            Contact us
        </p>
        <p style={{flex:'1',display:'flex',justifyContent:'center',marginBottom:'20px'}}>
            email:hr@gmail.com
        </p>
    </div>
</div>  

</div>

     )
}