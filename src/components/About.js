import User from "./User.js"
import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log( "Parent ComponentDidMount")

    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        return(
            <>
            {console.log("parent return statement")}
            <h1>About us......</h1>
            <h2>This is our about us page...</h2>
            {/* <User name={"rajkamal (function)"} location={"Ludhiana"}/> */}
            {/* <UserClass name={"satinder (class)"} location={"Pune"}/> */}
            
            </>
        )
    }
}
export default About;