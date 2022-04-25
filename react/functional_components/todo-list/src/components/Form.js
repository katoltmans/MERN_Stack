import React, { useState } from "react";
import { v4 } from "uuid";

function TodoForm(props) {
    const { todoItems, setTodoItems } = props;
    const [todo, setTodo] = useState("");
    const [seen, setSeen] = useState("false");
    const [error, setError] = useState("");

    //handle submit of form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            console.log("todo entered", todo, seen, v4());

            //define a todo object
            const todoItem = {
                id: v4(),
                todo: todo,
                seen: seen,
            };
            //create a todo item and set error
            setTodoItems([...todoItems, todoItem]);
            e.target.reset();
            setTodo("");
            setSeen("true");
        } else {
            setError("Please enter a Marvel title to the list.");
        }
    };

    return (
        <>
            {/* set error */}

            {/* handle onSubmit */}

            {/* form */}
            <form>
                <label>Add Marvel Media To List:</label>
                <input
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
