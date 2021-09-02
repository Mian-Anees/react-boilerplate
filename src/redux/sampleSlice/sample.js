// import { createAction, createReducer } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// const initialState=0;
// const changeName= createAction("Name");
// const changeNo= createAction("No");
// const reducer = createReducer(initialState,(builder)=>{
//     builder.addCase(changeName,(state,action)=>{
//         state.changeName= state;
//     })
//     builder.addCase(changeNo,(state,action)=>{
//         state.changeNo=state;
//     })
// })
// export {changeName,changeNo};
// export default reducer;
const sample = createSlice({name:"sampleApp",
initialState:{
    Name:"123",
    No:0
},
reducers:{
     changeName:(state,action)=>{
         state.Name=action.payload.Name;
     },
     changeNo:(state,action)=>{
         state.No=action.payload.No;
     }
}
})

export const {changeName,changeNo}=sample.actions;
export  default sample.reducer;