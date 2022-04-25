import React, { useState, Component } from "react";
import styles from "./Todo.module.css";

const Todo = (props) => {
    const { item, todoItems, setTodoItems } = props;
    console.log("TODO ITEM: ", item);
    const { todo, seen } = item;

    const handleClick = (e, listItem) => {
        console.log("clicked");

        //Strike through completed items
        const updatedTodos = todoItems.map((ti) => {
            if (item.id === ti.id) {
                console.log(ti.seen);
                ti.seen = !ti.seen;
            }
            return ti;
        });
        setTodoItems(updatedTodos);
    };
    //Delete todo items
    const handleDelete = (e, listItem) => {
        console.log("deleted");

        const updatedTodos = todoItems.filter((ti) => {
            if (item.id !== ti.id) {
                return ti;
            }
        });
        setTodoItems(updatedTodos);
    };

    return (
        <div>
            <ul className={styles.ul}>
                <li
                    className={styles.li}
                    style={{
                        textDecoration: seen === true ? "line-through" : "none",
                    }}
                >
                    {todo}
                </li>
                <div className="flex">
                    <label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            onClick={(e) => handleClick(e, item)}
                        />
                        Seen
                    </label>
                    <button onClick={(e) => handleDelete(e, item)}>
                        Delete Task
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default Todo;
