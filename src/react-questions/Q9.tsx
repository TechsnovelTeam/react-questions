// When you click the increment button, the Todos component re-renders. 
// If this component was complex, it could cause performance issues. How to fix the issue?

import React, { useState, memo } from 'react';

interface TodosProps {
    todos: string[];
}

export const Todos: React.FC<TodosProps> = ({ todos }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
        </>
    );
};

export const TodoList = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
  
    return (
      <>
        <Todos todos={todos} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
};