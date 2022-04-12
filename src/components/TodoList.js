import React, {useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import db from "../firebase";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllData();
  },[]);
  

    /*
TFG LABS
created by : sai Teja
created on : April 12, 2022

function for Fetching all the Data from firebase
*/

const getAllData = () => {

db.collection("ActiveData")
.get()
.then((snapchat) => {
  let studentList = [];
  snapchat.forEach(snap => {
    studentList.push(snap.val());
  })
  console.log(studentList,"lll");
})
.catch((error) => {
});

  }

      /*
TFG LABS
created by : sai Teja
created on : April 12, 2022

function for Validating the text added
*/

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

      /*
TFG LABS
created by : sai Teja
created on : April 12, 2022

function for Validating the text updated
*/

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

setTodos(removedArr);

db.collection("ActiveData")
.doc(todos[0].id).delete()
.then(() => {
})
.catch((error) => {
});
    


  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1> </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
