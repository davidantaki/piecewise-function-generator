import React from 'react';
import { hot } from 'react-hot-loader';
import GraphOption from './GraphOption.js'

const GraphOptionsList = ({ options }) => {
    return (
        <ul>

            {options.map(option =>
                <li>
                    <GraphOption label={option.label} toggle={option.toggle} />
                </li>
            )}
        </ul>
    );
}
export default hot(module)(GraphOptionsList);