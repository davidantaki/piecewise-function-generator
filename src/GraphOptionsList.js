import React from 'react';
import { hot } from 'react-hot-loader'
import Option from "./Option.js"

const GraphOptions = ({ options }) => {
    return (
        <ul>
            {options.map(optionLabel => (
                <li>
                    <Option label={optionLabel} />
                </li>
            ))}
        </ul>
    );
}
export default hot(module)(GraphOptions);