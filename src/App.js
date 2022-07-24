import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodos, setFilterTodos] = useState([])


  useEffect(() => {
    getLocalTodo()
  }, [])

  useEffect(() => {
    changeHandler()
    saveLocalTodo()

   
  }, [todos,status])


  const changeHandler = () => {
    switch (status) {
      case 'completed':
      setFilterTodos(todos.filter(todo => todo.completed === true ))
        break;

        case 'uncompleted':
          setFilterTodos(todos.filter(todo => todo.completed === false ))

          break;
    
      default:
        setFilterTodos(todos)
        break;
    }
  }

  const saveLocalTodo = () => {
      localStorage.setItem('todos',JSON.stringify(todos))
    
  }
  const getLocalTodo = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.getItem('todos',JSON.stringify([]))
    }else{
     let sex =JSON.parse(localStorage.getItem('todos'))
        setTodos(sex)
    
    }
  }
  return (
    <div className="App">
        <header>
      <h1>Ed's Todo List </h1>
    </header>
    <Form status={status} setStatus={setStatus} inputText={inputText} setTodos={setTodos} todos={todos} setInputText={setInputText}/>
    <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
