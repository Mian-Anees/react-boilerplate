import { Body } from '../components/body'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { LeftNav } from '../components/leftnav'
import {React} from 'react'

export const Home =()=>{


    return(
        <>
        <div style = {{ display: 'flex',width:'100%',height:'100%',flexDirection:'column'}}>
            <Header/>
        <div style = {{width:'100%',height:'100%',backgroundColor:"white",display:'flex',flexDirection:'column'}}>
            {/* <LeftNav/> */}
            <Body/>
        </div>
        <div style = {{width:'100%',height:'100%',backgroundColor:"white",display:'flex',flexDirection:'column'}}>
            <Footer/>
        </div>
        </div>
        </>
    )
}