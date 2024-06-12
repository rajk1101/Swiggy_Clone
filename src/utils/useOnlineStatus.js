import { useEffect, useState } from "react";
const useOnlineStatus=()=>{
    const[onlineStatus,setOnlineStatus]=useState(true)
    //tyr check  internet connection :  if online or offline
    /**Before creating the custom hooks first finalize your contract means first find input and output and what it returns at the end means wht u want at the end  */
    useEffect(()=>{
        window.addEventListener("offine",()=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        })
    },[])
    return onlineStatus;
}
export default useOnlineStatus