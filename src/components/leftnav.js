import {React} from 'react';

export const LeftNav= ()=>{
    const list=['1','2','3','4','5','2','3','4','5']
    console.log('in loop')
    return(
        <>
        <div style = {{ display: 'flex',width:'20%',flexDirection:'column',overflowY:'hidden',height:'900px',backgroundColor:'white'}}>
        {
            list.map((res)=>(
                <>
                <div >
                    <h2 style={{display: 'flex',alignItems:'center',height:'100px'}}>
                        {res}  
                    </h2>
                    <hr style={{color:'blue'}}>
                    </hr>
                </div>
                    
            </>
        ))
    }
            
        </div>
        
       
    </>
    )
} 