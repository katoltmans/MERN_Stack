import React, { useState } from "react";
import styles from "./Form.module.css";
import { v4 } from "uuid";

function TodoForm(props) {
    const { todoItems, setTodoItems } = props;
    const [todo, setTodo] = useState("");
    const [error, setError] = useState("");

    //handle submit of form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            console.log("todo entered", todo, v4());

            //define a todo object
            const todoItem = {
                id: v4(),
                todo: todo,
                seen: false,
            };
            //create a todo item and set error
            setTodoItems([...todoItems, todoItem]);
            e.target.reset();
            setTodo("");
        } else {
            setError("Please enter a Marvel title to the list.");
        }
    };

    return (
        <>
            {/* set error */}

            {/* handle onSubmit */}

            {/* form */}
            <form onSubmit={handleSubmit}>
                <label>Add Marvel Media To List:</label>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Enter a Marvel movie or series to view."
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    /*todo !== " " && todo.length < 5 ? <p>Todo item must be at least 5 characters</p> : null*/
                />
                <button type="submit">Add it!</button>
            </form>
        </>
    );
}

export default TodoForm;
