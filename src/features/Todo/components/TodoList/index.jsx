import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList : PropTypes.array,

};
TodoList.defaultProps ={
    todoList : [],
}


function TodoList({todoList}) {
    
    return (
        <ul>
          {todoList.map( obj => (
              <li key={obj.id}>{obj.title}</li>
          ))}
        </ul>
    );
}

export default TodoList;