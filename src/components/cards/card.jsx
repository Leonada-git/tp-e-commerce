import React from "react";

const Card=(props)=>{
    console.log(props)
    return(<div className="card1">
        <div className="card-tag">
            <p>{props.tag}</p>
        </div>
        <div className="card-img">
            <img src={props.product} alt="" />
        </div>
        <div className="label">
            <p>{props.label}</p>
        </div>
        <div className="dev">
            <p>{props.delivery}</p>
        </div>
        <div className="price">
            <p>{props.price}</p>
        </div>
        <div className="buttons">
            <button className="add">Add Cart</button>
            <button className="buy">Buy</button>
        </div>
    </div>)
}

export default Card;