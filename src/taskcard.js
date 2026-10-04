import React from "react";
function TaskCard(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p> Category :  {props.category}</p>
        </div>
    );
}
export default TaskCard