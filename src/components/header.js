import Avatar from 'react-avatar';
import {React} from 'react';
import logo from '../assets/logo/logoipsum-logo-5.svg'

export const Header=()=>{

    const list=['Home','Products','Services','Categories','Settings'];
     
    return(
    <div style = {{ display: 'flex',height:'100px', backgroundColor:'white',justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor:'white'}}>
        <div style={{display: 'flex',flex:'0.2',left:'15px',position:'relative'}}  >
            <img src={logo} alt="My logo" style={{height:'100%',width:'100%'}} >
            </img>
        </div >
        <div style={{display:'flex',flexWrap:'wrap',flex:'0.8', justifyContent:'space-evenly'}}>
            {
                list.map((res)=>{
                    return(
                        <>
                            <button style={{backgroundColor:'white', fontFamily:'sans-serif',border:'none',fontSize:'18px'}}>
                                {res}
                            </button>
                        </>
                    )
                })
            }
        </div>
        <div style={{display:'flex',justifyContent:'center',flex:'0.2',alignItems:'center',position:'relative',right:'10px'}} >
            <Avatar name="Foo Bar" round="30px" size="60" textSizeRatio={1.75}/> 
        </div>  
    </div>
    )
}