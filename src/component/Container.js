import React from "react";
import Todos from "./Todos";

const InnerContainer = (props) => {
    const todos = props.todos.map((todo, index) => {
        return (
            <div key={index} className="inner-container">
                <Todos data={todo} onDelete={props.onDelete} index={index}/>
            </div>

        );
    })
    return (
        <div className="container">
            {todos}
        </div>

    )
}
const Container = (props) => {
    return (
        <InnerContainer todos={props.todoData} onDelete={props.onDelete}/>
    );
}

export default Container;