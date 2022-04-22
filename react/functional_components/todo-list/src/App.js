import "./App.css";
import Todo from "./components/Todo.js";
import background from "./img/marvel_phase_4.jpg";

function App() {
    const todoItems = [
        {
            id: 1,
            todo: "Finish MoonNight series",
        },
        {
            id: 2,
            todo: "Watch Doctor Strange in the Multiverse of Madness (May 6)",
        },
        {
            id: 3,
            todo: "Begin Ms. Marvel series (June 8)",
        },
        {
            id: 4,
            todo: "Go see Thor: Love and Thunder (July 8)",
        },
        {
            id: 5,
            todo: "Anxiously await Black Panther: Wakanda Forever (November 11)",
        },
    ];

    return (
        <div className="App" style={{ backgroundImage: `url(${background})` }}>
            <div className="title">
                <h2>Phase 4 Marvel Todos</h2>
            </div>
            <div className="list">
                {todoItems.map((item) => {
                    return <Todo key={todoItems.id} item={item} />;
                })}
            </div>
        </div>
    );
}

export default App;
