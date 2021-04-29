import * as userActions from "../actionTypes/userActions.type"
import axios from "axios"
export const getAllUser  = () =>{
    return async (dispatch)=>{
        try{
            dispatch({type:userActions.GET_ALL_USER_REQUEST});
            let result  = await axios.get("http://localhost:5000/users/")
            dispatch({type:userActions.GET_ALL_USER_SUCCESS,payload:result.data})
        }catch (error){
            dispatch({type:userActions.GET_ALL_USER_FAILURE,payload:error.message})
        }
    }
}

export const addUser = (user)=>{
    return async (dispatch)=>{
        try{
           dispatch({type:userActions.ADD_USER_SUCCESS,payload:user})
        }catch (error) {
            dispatch({type:userActions.ADD_USER_SUCCESS,payload:error.message})
        }
    }
}