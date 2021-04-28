import { LogOut, Sign_Up } from "./ActionType"

export const Sign_upAction = (payload)=>{
    console.log("in sign up action")
  return{
      type:Sign_Up,
      payload
  }
}
export const LogOutAction = ()=>{
    return{
        type:LogOut
    }
}