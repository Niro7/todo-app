import React from 'react';
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({value, title, onDelete}) =>{ //ES6 destructuring - {title, description} no need to use props 

    return(
        <div className="todo">
            <div className="todoItems">
                <h2>{title}</h2>
            </div>
            <button className="btnDel" value={value} onClick={e => onDelete(value)}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
      </div>
    );
}

export default Todo; //Can use this file in different file