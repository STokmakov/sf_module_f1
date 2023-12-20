import React from "react";

const Weather5day = props => (
    <div className="infoWeath5day">
    { props.city  &&
        <div>
            <p></p>
            <p></p>
            <h5>День:{props.day}</h5>
            <p></p>
            <p>temp: {props.temp}</p>
            <p>pressure: {props.pressure}</p>
        </div>
        }
    </div>
    )

export default Weather5day;