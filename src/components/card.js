import {React} from 'react'

const styleObject = {
    "display":"flex",
    "flexDirection":"column",
    "height" : "320px",
    "width" : "200px",
    "margin":"20px",
    "padding":"20px",
    "overflow":"visible",
    "borderRadius":"20px",
    "boxShadow": "1px 1px 8px 2px rgb(0 0 0 / 0.2)"
    
}
export const Cards = ()=>{
    let input ='Flower World Charity'
    return (
        <>
            <div style={styleObject} >
                    <div style={{height:"220px",width:"200px",}}>
                    <img style={{height:"100%",width:"100%",borderRadius:"5px"}} 
                    src = 'https://media.istockphoto.com/photos/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-picture-id1181366400?k=20&m=1181366400&s=612x612&w=0&h=p-iaAHKhxsF6Wqrs7QjbwjOYAFBrJYhxlLLXEX1wsGs='
                    // src="https://via.placeholder.com/500x500"
                    >
                    </img>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",marginTop:'10px',height:'25px'}}>
                        <div style={{display:'flex',flexDirection:"row",fontFamily:"sans-serif",fontWeight:'bold', flex:0.7,fontSize:'17px'}}>
                       { 
                       input.length > 14 ? `${input.substring(0, 14)}...` : input
                       }
                        </div>
                        <div style={{display:'flex',flexDirection:"row",flex:0.3,justifyContent:'center'}}>
                            <div style={{display:'flex',backgroundColor:'#F5F5F5',flex:0.5,borderRadius:'5px',fontWeight:'bold',fontSize:'10px',justifyContent:'center',alignItems:'center',padding:'5px'}}>
                                BSC
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",marginTop:'10px',height:'25px'}}>
                        <div style={{display:'flex',flexDirection:"row",fontFamily:"sans-serif",color:'gray', flex:0.5,fontSize:'14px'}}>
                       Current bid
                        </div>
                        <div style={{display:'flex',flexDirection:"row",flex:0.5,justifyContent:'center'}}>
                            <div style={{display:'flex',flexDirection:"column",fontWeight:'bold',fontSize:'13px',justifyContent:'center',alignItems:'end',padding:'5px'}}>
                                16.00 BUSD
                                <div style={{display:'flex',flex:0.5,borderRadius:'5px',fontWeight:'bold',color:'gray',fontSize:'12px',justifyContent:'center',alignItems:'center',padding:'5px'}}>
                                =$ 16.00
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",marginTop:'10px',height:'25px'}}>
                        <div style={{display:'flex',flexDirection:"row",fontFamily:"sans-serif",color:'gray', flex:0.5,fontSize:'14px'}}>
                       Creator
                        </div>
                        <div style={{display:'flex',flexDirection:"row",flex:0.5,justifyContent:'center'}}>
                            <div style={{display:'flex',flexDirection:"column",fontSize:'13px',justifyContent:'center',alignItems:'end',padding:'5px'}}>
                                aleksustya
                            </div>
                        </div>
                    </div>
                
            </div>
        </>
    )
}