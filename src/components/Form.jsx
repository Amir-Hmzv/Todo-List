import React from 'react';

const Form = ({setInputText,setTodos,todos,inputText,setStatus}) => {
 const inputTextHandle = (e) => {
 
    setInputText(e.target.value)
 }

 const submitTodoHandler  = (e) => {
     e.preventDefault()
     setTodos([
         ...todos,{text:inputText,completed:false,id:Math.random() * 1000}
     ])
 }
 const setStatusHandler  = (e) => {
   setStatus(e.target.value)
}


    return (
<form>
  <input value={inputText} onChange={inputTextHandle} type="text" className="todo-input" />
  <button onClick={submitTodoHandler} className="todo-button" type="submit">
    <i className="fas fa-plus-square" />
  </button>
  <div className="select">
    <select onChange={setStatusHandler} name="todos" className="filter-todo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  </div>
</form>

    );
};

export default Form;