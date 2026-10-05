import React from "react";
function TaskCard(props){
    return(
        <div className="task-card">
            <div className="task-icon">

            </div>
            <div className="task-content">
            <h2>{props.title}</h2>
            <span className="task-category">
            <p> Category :  {props.category}</p>
            </span>
        </div>
        </div>
    );
}
export default TaskCard