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
            <div className="task-action">
                <label>
                    <input type="checkbox"
                    checked={props.completed}
                    onChange={props.onComplete}
                    />
                    {props.completed ? "Completed":"Complete"}
                </label>
                <button className="delete-button" onClick={props.onDelete}> Delete </button>
            </div>
        </div>
        </div>
    );
}
export default TaskCard