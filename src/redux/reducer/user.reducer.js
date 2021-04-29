import * as userActionsTypes from "../actionTypes/userActions.type"
export const userFeatureKey = "users";
let initialState = {
    loading:false,
    users:[],
    message:"",
    errorMessage:"",
}

export const reducer = (state = initialState , action)=>{
    let {type , payload} = action;
    switch (type){
        case userActionsTypes.GET_ALL_USER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case userActionsTypes.GET_ALL_USER_SUCCESS:
            return {
                ...state,
                users:payload.data,
                message: payload.message,
                loading: false
            }
        case userActionsTypes.GET_ALL_USER_FAILURE:
            return{
                ...state,
                errorMessage: payload,
                loading: false
            }
        default : return state;
    }
}