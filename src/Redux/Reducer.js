import { LogOut, Sign_Up } from "./ActionType"

const initialValue = {
    data:[]
}

const SignUp_Reducer = (state = initialValue,action)=>{
    console.log("in side signup reducer",action.type)
    switch(action.type){
        case Sign_Up:
        return({
           ...state,  
           data:action.payload  
        })
        case LogOut:
            return{
                data:[]
            }
        default:
            return state

    }
}

export default SignUp_Reducer