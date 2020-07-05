import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';

const InputField = ({onInputChange, input, label }) => {
    return (
        <>
            <label>{label}:
            <input
                    type="text"
                    value={input}
                    onChange={e => onInputChange(e.target.value)}
                />
            </label>
        </>

    );
}

export default hot(module)(InputField);