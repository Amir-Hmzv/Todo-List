import React from 'react';
import Todo from './Todo';

const TodoList = ({todos,setTodos,filterTodos}) => {
    console.log(todos);
    return (
<div className="todo-container">
  <ul className="todo-list">
   {filterTodos.map(item => {
       return <Todo
       key={item.id}
       text={item.text}
       setTodos={setTodos}
       todos={todos}
       todo={item}
       />
   })}
  </ul>
</div>

    );
};

export default TodoList;