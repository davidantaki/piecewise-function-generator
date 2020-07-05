import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader'
import './App.css';
import GraphOptions from './GraphOptionsList.js';
import Graph from './Graph.js';
import InputField from './InputField.js';

// Checkbox options for which functions to display on the graph
const graphOptions = [
    "Original Function",
    "Piecewise Function"
];

// Temp test original Javascript function
function testFunc(x) {
    // return 2 * Math.pow(x, 2);
    return Math.sin(x);
}

const App = () => {
    // Stores the state for the the "Function:" input box
    const [functionInputStr, setFunctionInput] = useState("");
    useEffect(() => {
        console.log(functionInputStr);
    }, [functionInputStr]);

    // Stores the state for the x-value input box
    const [xValInput, setxValInput] = useState("");

    // Stores the state for the y-value input box
    const [yValInput, setyValInput] = useState("");

    return (
        <div className="App">
            <h1>Piecewise Generator</h1>
            <GraphOptions options={graphOptions} />
            <Graph origFunctionStr={functionInputStr} />
            <InputField onInputChange={setFunctionInput} input={functionInputStr} label="Function" /><br />
            <InputField onInputChange={setxValInput} input={xValInput} label="x-Value" />

        </div>
    );
}

export default hot(module)(App);