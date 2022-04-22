import React, { useState } from "react";

const Todo = (props) => {
    const { item } = props;
    console.log("TODO ITEM: ", item);
    const { todo } = item;
    const [todoItem, setTodoItem] = useState(todo);

    return (
        <div className="listItem">
            <ul>
                <li>{todoItem}</li>
            </ul>
        </div>
    );
};

export default Todo;
