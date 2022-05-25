import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: ""
  });

  function handleTaskInput(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.floor(Math.random() * 1000) });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <div>
        <div className="content">

        <div>
        <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInput}
        />
        </div>
        
        <div className="submitbutton">
        <Button
        onClick={handleSubmit}
        variant="contained"
        size="large"
        type="submit"
        >
        Add task
        </Button>
        </div>
      
        </div>
      
    </div>
  );
}

export default TodoForm;
