import React, { useState, useEffect, useReducer } from 'react';
import { hot } from 'react-hot-loader'
import './App.css';
import GraphOptionsList from './GraphOptionsList.js';
import Graph from './Graph.js';
import InputField from './InputField.js';
import { evaluate } from 'mathjs';



const App = () => {
    // Reducer function for storing option state for original function
    const [showOrigFuncOpt, toggleShowOrigFuncOpt] = useReducer(
        showOrigFuncOpt => !showOrigFuncOpt,
        true
    );

    // Reducer function for storing option state for piecewise function
    const [showPiecewiseFuncOpt, toggleShowPiecewiseFuncOpt] = useReducer(
        showPiecewiseFuncOpt => !showPiecewiseFuncOpt,
        true
    );

    // Checkbox options for which functions to display on the graph
    // An array of objects with each object representing one option
    const graphOptions = [
        { label: "Original Function", toggle: toggleShowOrigFuncOpt },
        { label: "Piecewise Function", toggle: toggleShowPiecewiseFuncOpt }
    ];

    // Stores the state for the the "Function:" input box
    const [functionInputStr, setFunctionInput] = useState("");

    // Stores the state for the x-value input box
    const [xValInput, setxValInput] = useState("");

    // // Updates the x-Value input box using the 
    // useEffect(() => {
    //     "strict mode";
    //     try {
    //         setyValInput(evaluate(functionInputStr, { x: xValInput }));
    //     }
    //     catch (err) { }
    // }, [xValInput]);

    // Stores the state for the y-value input box
    const [yValInput, setyValInput] = useState("");

    // Udpates the y-Value input box using the original function if something
    // is inputted into the x-value input box
    useEffect(() => {
        "strict mode";
        try {
            setyValInput(evaluate(functionInputStr, { x: xValInput }));
        }
        catch (err) { }
    }, [xValInput]);

    return (
        <div className="App">
            <h1>Piecewise Generator</h1>
            <GraphOptionsList options={graphOptions} />
            <Graph origFunctionStr={functionInputStr} showOrigFuncOpt={showOrigFuncOpt} showPiecewiseFuncOpt={showPiecewiseFuncOpt} />
            <InputField onInputChange={setFunctionInput} input={functionInputStr} label="Original Function" /><br />
            <InputField onInputChange={setxValInput} input={xValInput} label="x-Value" /><br />
            <InputField onInputChange={setyValInput} input={yValInput} label="y-Value" />
            

        </div>
    );
}

export default hot(module)(App);