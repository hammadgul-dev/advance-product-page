import { createSlice } from "@reduxjs/toolkit";

let saveUserInfo = JSON.parse(localStorage.getItem("userInfo")) ?? []

let userProfileSlice = createSlice({
    name : "User Profile Info",
    initialState : {
        userImg : null,
        userName : null,
    },
    reducers : {
        userProfileHandler(state , action){
            state.userImg = action.payload.userImg
            state.userName = action.payload.userName.trim().toLowerCase().split(" ")
            .map(userName => userName.charAt(0).toUpperCase()+ userName.slice(1)).join(" ")
            localStorage.setItem("userInfo" , JSON.stringify({
                userImg : state.userImg,
                userName : state.userName
            }))
        }
    }
})

export const {userProfileHandler} =  userProfileSlice.actions
export default userProfileSlice.reducer
