import React from "react";
import "./Nav.css";


const Todos = (props) => {

    return (
        <div className="todos">
            <span id="closebtn" onClick={()=>props.onDelete(props.index)}>&times;</span>
            <h1>{props.data.title}</h1>
            <hr />
            <p>{props.data.description}</p>
            <span>{props.data.date}</span>

        </div>
    );

}

export default Todos;