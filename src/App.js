import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <h2> T O D O</h2>
      <TodoList />
    </div>
  );
}

export default App;
