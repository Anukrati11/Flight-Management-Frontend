import React from "react"
import Navigation from "../core/Navigation"
// import { Link } from "react-router-dom"
import { useLocation, useNavigate, useParams } from "react-router-dom"
const FlightEdit = () => {

    const params = useParams();

    const location = useLocation();

    const navigation = useNavigate();


    console.log("params --> ",params?.id);
    console.log("location --> ", location);
    return (
        <div>
            <Navigation/>
            <h2>Flights Edit is {params?.id}</h2>
            <button onClick={() => navigation("/flights", {state: location.state})}>Go back</button>
        </div>
    )
}

export default FlightEdit