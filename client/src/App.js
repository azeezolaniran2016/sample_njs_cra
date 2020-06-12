import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const result = await (await fetch('/api/v1/todos')).json()
        console.log('todos: ', result)
        setTodos(result.results)
      } catch(err) {
        console.error('could not fetch todos. ', err)
      }
    })()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          todos.map(todo => {
            return <div key={todo.id}>{todo.name}</div>
          })
        }
      </header>
    </div>
  );
}

export default App;
