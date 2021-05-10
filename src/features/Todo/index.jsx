import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: "hello",
        },
        {
            id: 2,
            title: "hello",
        },
        {
            id: 3,
            title: "hello",
        },
    ]

    return (
        <div>
            <h1>Chào Ngô Hoàng Thế Duy đến với React</h1>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;