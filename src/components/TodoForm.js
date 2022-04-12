import React, { useState, useEffect, useRef } from 'react';
import db from "../firebase";

/*
TFG LABS
created by : sai Teja
created on : April 12, 2022

function for TODO Components where the ToDO Lists are created 
*/


function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  /*
TFG LABS
created by : sai Teja
created on : April 12, 2022

function for triggering value for changing value in input
*/

  const handleChange = e => {
    setInput(e.target.value);
  };

    /*
TFG LABS
created by : sai Teja
created on : April 12, 2022

function for submitting form with the value added in the TODO
*/

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
   
    db.collection("ActiveData")
    .add({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    .then(() => {
      // alert("success");
    })
    .catch((error) => {
      // alert("failed");
      console.log(error);
    });

  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;


// <footer>
// <button onClick={handleSubmit} className='todo-button-footer'>
// Active </button>
// <button onClick={handleSubmit} className='todo-button-footer'>
// Completed </button>
// <button onClick={handleSubmit} className='todo-button-footer'>
// Clear Completed </button>
// </footer>
