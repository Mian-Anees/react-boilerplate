import { Cards } from './card';
import {React} from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'
export const Body=()=>{
    const list =[1,2,3,4,5,6,7,8,9,0,0]
     return(
        
        <div className="scroll-container" style = {{width:'100%',height:'100%'}}>
            <h1 style = {{marginLeft:'20px'}}>
                Top
            </h1>
            <ScrollContainer  style = {{display:'flex',flexDirection:'row'}}> 
            {
                list.map((res)=>{
                    return(
                        <>
                            <Cards/>
                        </>
                    )
                })
            }
           </ScrollContainer>
           <h1 style = {{marginLeft:'20px'}}>
                Trending
            </h1>
           <ScrollContainer style = {{display:'flex',flexDirection:'row'}}>
            {
                list.map((res)=>{
                    return(
                        <>
                            <Cards/>
                        </>
                    )
                })
            } 
            </ScrollContainer>
            <h1 style = {{marginLeft:'20px'}}>
                Popular
            </h1>
            <ScrollContainer style = {{display:'flex',flexDirection:'row'}}>
            {
                list.map((res)=>{
                    return(
                        <>
                            <Cards/>
                        </>
                    )
                })
            } 
            </ScrollContainer>
      
      </div>
     )
}