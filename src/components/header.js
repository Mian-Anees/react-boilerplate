import {React} from 'react';

export const Header=()=>{

    const list=['Home','Products','Services','Categories','Settings'];
     
    return(
        <div style = {{ display: 'flex', backgroundColor:'white',height:'60px',justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'white'}}>
        <div style={{display: 'flex',flex:'0.1',height:'60px',width:'60px',marginLeft:'20px',marginTop:'20px'}}  >
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' style={{height:'100%',width:'100%'}} >
            </img>
        </div >
        <div style={{display:'flex',flex:'0.8',flexDirection:'row'}}>
            {
                list.map((res)=>{
                    return(
                        <>
                        <button style={{backgroundColor:'white',flex:'1', fontFamily:'sans-serif',margin:'5px',padding:"5px",height:'100%',border:'none',borderRadius:'5px',fontWeight:'bold',fontSize:'20px'}}>
                        {res}
                        </button>
                        </>
                    )
                })
            }
        </div>
        <div style={{flex:'0.1',display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}} >
            <img src='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80' style={{height:'80%',width:'40%', borderRadius:'50%'}}></img>
        </div>  
    </div>
    )
}