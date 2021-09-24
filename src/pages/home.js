import "../index.css";

import { Body } from '../components/body'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { LeftNav } from '../components/leftnav'
import {React} from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

// import { StyleSheet, css } from "aphrodite";


// const styles = StyleSheet.create({
//     heading: {
//       backgroundColor: "red",
//       display: 'flex',width:'100%',height:'100%',flexDirection:'column',
//       "@media (min-width: 767px)": {
//         backgroundColor: "green"
//       }
//     }
//   });
  
export const Home =()=>{
    return(
    <>
        <div className="container-body">
            <div  style = {{ display: 'flex',width:'100%',height:'100px',flexDirection:'column'}}>
                <Header/>
            </div>
        <ScrollContainer style = {{width:'100%',backgroundColor:"white",display:'flex',flexDirection:'column'}}>
            {/* <LeftNav/> */}
            <Body/>
        </ScrollContainer>
            <div style = {{width:'100%',height:'20px',display:'flex',flexDirection:'column'}}>
                <Footer/>
            </div>
        </div>
    </>
    )
}