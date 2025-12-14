import { createSlice } from "@reduxjs/toolkit";

let sideBarToggle = createSlice({
    name : "sideBar Toggle",
    initialState : {value : false},
    reducers : {
        setToggle(state){
            state.value = !state.value
        }
    }
}) 

export const {setToggle} = sideBarToggle.actions
export default sideBarToggle.reducer