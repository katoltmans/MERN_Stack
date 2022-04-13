import "./App.css";
import ChangeText from "./components/change-text.mjs";
import SetItemState from "./components/set-state";
import SetArray from "./components/array-test";
import AddName from "./components/add-name";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ChangeText />
                <SetItemState />
                <SetArray />
                <AddName />
            </header>
        </div>
    );
}

export default App;
