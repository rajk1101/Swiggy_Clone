import { useRouteError } from "react-router-dom";
const Error = ()=> {
    const err= useRouteError();
    console.log(err);
    return(
        <>
        <h3>{err.status}:{err.status}</h3>
        </>
    )
}
export default Error;