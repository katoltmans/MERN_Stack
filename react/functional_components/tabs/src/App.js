import React from "react";
import "./App.css";
import Tabs from "./components/tabs.js";

function App() {
    const tabInfo = [
        {
            id: 1,
            name: "Miyagi-Do",
            info: "The Miyago-Do dojo came to be when Pat Miyagi trained Daniel Larusso to compete in the All Valley tournament, silencing the bullies who plagued him. They believe Karate is for defense only.",
        },
        {
            id: 2,
            name: "Eagle Fang",
            info: "The Eagle Fang Dojo is the creation of Johnny Lawrance after he was kicked out of his revival of the famed Cobra Kai dojo. Their motto is 'offense is the best defense.'",
        },
        {
            id: 3,
            name: "Cobra Kai",
            info: "Cobra Kai is a creation of John Kreese when he returned from the Vietnam war. This dojo trains fighters with the mentality to spare no mercy.",
        },
    ];
    return (
        <div className="App">
            <Tabs tabInfo={tabInfo} />
        </div>
    );
}

export default App;
