import React from "react";
import "./MiniCard.css";

function MiniCard(props) {
    return (
        props.direction == "right"
            ?
            <div className={props.direction}>
                {props.description} {" "} <i className={props.image}></i>
            </div>
            :
            <div className={props.direction}>
                <i className={props.image}></i> {" "} {props.description}
            </div>


    )
}

export default MiniCard;