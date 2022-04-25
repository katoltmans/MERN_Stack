import "./App.css";
import Todo from "./components/Todo.js";
import TodoForm from "./components/Form";
import background from "./img/marvel_phase_4.jpg";
import { useState } from "react";

function App() {
    // const items = [
    //     {
    //         id: 1,
    //         todo: "Finish MoonNight series",
    //         seen: false,
    //     },
    //     {
    //         id: 2,
    //         todo: "Watch Doctor Strange in the Multiverse of Madness (May 6)",
    //         seen: false,
    //     },
    //     {
    //         id: 3,
    //         todo: "Begin Ms. Marvel series (June 8)",
    //         seen: false,
    //     },
    //     {
    //         id: 4,
    //         todo: "Go see Thor: Love and Thunder (July 8)",
    //         seen: false,
    //     },
    //     {
    //         id: 5,
    //         todo: "Anxiously await Black Panther: Wakanda Forever (November 11)",
    //         seen: false,
    //     },
    // ];

    const [todoItems, setTodoItems] = useState([]);

    return (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
            <div className="title">
                <h2>Phase 4 Marvel Todos</h2>
                <TodoForm todoItems={todoItems} setTodoItems={setTodoItems} />
            </div>
            <div className="list">
                {todoItems.map((item) => {
                    return (
                        <Todo
                            key={item.id}
                            item={item}
                            todoItems={todoItems}
                            setTodoItems={setTodoItems}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
