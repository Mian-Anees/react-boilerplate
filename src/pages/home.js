import { Body } from '../components/body'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { LeftNav } from '../components/leftnav'
import {React} from 'react'

const ContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: 300
  }

export const Home =()=>{


    return(
        <>
        <div style = {{ display: 'flex',width:'1400px',height:'1200px',flexDirection:'column'}}>
        <Header/>
        <div style = {{ display: 'flex',width:'100%',height:'100%',flexDirection:'row'}}>
        <LeftNav/>
        <Body/>
        </div>
            <Footer/>
        </div>
        </>
    )
}