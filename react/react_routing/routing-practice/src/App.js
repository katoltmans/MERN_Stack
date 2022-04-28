import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import WordNumChooser from "./components/WordNumChooser";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/:path" element={<WordNumChooser />} />
                    <Route
                        path="/:path/:colorA/:colorB"
                        element={<WordNumChooser />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
