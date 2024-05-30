import { upload } from "@testing-library/user-event/dist/upload";
import { useEffect, useState } from "react";

const User =(props)=>{
    const[count,setCount]=useState(0);
    const[update,setUpdate]=useState(0);
    console.log("1st child rendered")
    function handleChange(){
        if(count>=0){
        setCount(count+1);}
        else{
            setCount(0)
        }
    }
    useEffect(()=>{fetchMenu()},[]);
    const fetchMenu=async ()=>{
        console.log("useeffect rendered")
        const response= await fetch("https://api.github.com/users/rajk1101");
        const result= await response.json();
        console.log(response,"gitHub api")
        setUpdate(result)
    }
    
    // const{name,location}=update;
    return(
        
        <div className="userCard">
            {console.log("1st child return statement")}
            <h3>Count:{count}</h3>
            <button onClick={()=>{handleChange()}}>count Increase  function based</button>
            <h2>{update.name}</h2>
            <h3>Location:- {update.location}</h3>
            <h4>Contact:- @rajkamal_1101</h4>
        </div>
    )
}
export default User;