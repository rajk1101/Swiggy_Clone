import { render } from "@testing-library/react";
import React from "react";
import "../index"


class UserClass extends React.Component{
    constructor(props){
        console.log("2nd child rendered")
        super(props)
        // console.log(props.name);
        // console.log(props.location);
        this.state={
            // count:0,
            // count1:1
            userInfo:{
                name:"dummy",
                location:"pune",
                avatar_url:"https....avaatar url"
            }
            
        }
        console.log(this.props.name +"CHild COnstructor")
        
    }
   async componentDidMount(){
    const data= await fetch("https://api.github.com/users/rajk1101");
    const json =await data.json();
    console.log(data,"didMount");
    this.setState({userInfo:json})
        console.log(this.props.name+" 2nd Child ComponentDidMount")//api calls
    }
    componentDidUpdate(){
        console.log("component Did update")
    }
    render(){
        const {name,location,avatar_url} =this.state.userInfo;
        return(
            <div className="userCard">
                <h3>Count:{this.state.count}</h3>
                <h3>count1:{this.state.count1}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                        count1:this.state.count+1
                    })
                }}>+
                </button>
                <img  className="avatarUrl"src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Location:-{location}</h3>
                <h4>Avatar_url: {avatar_url}</h4>
            </div>
        )
    }
}
export default UserClass;