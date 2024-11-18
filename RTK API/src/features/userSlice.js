import { createSlice } from "@reduxjs/toolkit";
import Chance from "chance";

const chance = new Chance();
export const userSlice = createSlice({
    name:'users',
    initialState:{},
    reducers:{
        addUsers:(state,actions)=>{
            const newUser={
                id:chance.guid(),
                name:chance.name(),
                email:chance.email(),
            }
            state.push(newUser )
            
        },
        removeUser:(state,actions)=>{
            state=state.filter(user=>user.id!==actions.payload)
        },
        allDelete:(state,actions)=>{
            return []
        },
    }
})

export const {addUsers,removeUser,allDelete}=userSlice.actions;

export default userSlice.reducer;