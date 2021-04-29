import * as userActions from "../actionTypes/userActions.type"
import Axios from "axios"
const {createProxyMiddleware} = require("http-proxy-middleware")
export const getAllUser  = () =>{
    return async (dispatch)=>{
        try{
            dispatch({type:userActions.GET_ALL_USER_REQUEST});
            let headers = {
                "JsonStub-Project-Key": "fd7f1136-86f3-4c0e-b3c4-627c73493a4e",
                "JsonStub-User-Key": "a11dea59-1923-4e45-83a8-6676bc896d75",
                "Content-Type": 'application/json',
            };
            let dataUrl = "/orgs/1234/users";
            let response = await Axios.get(dataUrl, {headers:{
                    "Content-Type": 'application/json',
                }})
            console.log("response.data -->",response)
            dispatch({type:userActions.GET_ALL_USER_SUCCESS,payload:response.data})
        }catch (error){
            console.log("error.message -->",error.message)
            dispatch({type:userActions.GET_ALL_USER_FAILURE,payload:error.message})
        }
    }
}