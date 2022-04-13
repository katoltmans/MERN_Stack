import logo from "./logo.svg";
import "./App.css";
import ChangeText from "./components/change-text.mjs";
import SetItemState from "./components/set-state";
import SetArray from "./components/array-test";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ChangeText />
                <SetItemState />
                <SetArray />
            </header>
        </div>
    );
}

export default App;
