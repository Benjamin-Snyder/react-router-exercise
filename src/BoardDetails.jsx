import { useEffect } from "react";
import { useParams, useLocation } from "react-router"; //added
import { Link } from "react-router"; //added

const BoardDetails = () => {
    const {id} = useParams(); //added
    const location = useLocation();//added
    const details = location.state;//added
    console.log(location);//added
/*
    useEffect(() => { // get data from server (not applicable to this lab)
        fetch(`api/${params.id}`)
    })
*/
    return (<>
        <h1>ID: {id} </h1>
        <h2>Title: {details.title} </h2>
        <h3>Category: {details.category} </h3>
        <Link to="/">Home</Link>
    </>)
}

export default BoardDetails;
