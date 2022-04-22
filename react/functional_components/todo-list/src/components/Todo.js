import React, { useState, Component } from "react";
import styles from "./Todo.module.css";

const Todo = (props) => {
    const { item } = props;
    console.log("TODO ITEM: ", item);
    const { todo } = item;
    const [todoItem, setTodoItem] = useState(todo);

    const handleClick = (e) => {
        console.log("clicked");
        e.target.style.textDecoration = "line-through";
    };

    return (
        <div>
            <ul className={styles.ul}>
                <li className={styles.li}>{todoItem}</li>
                <button onCLick={handleClick}>Seen!</button>
            </ul>
        </div>
    );
};

export default Todo;
