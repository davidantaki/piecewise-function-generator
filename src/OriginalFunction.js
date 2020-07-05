import React from 'react';
import { hot } from 'react-hot-loader'

const OriginalFunction = () => (
    <ul>
        {options.map(optionLabel => (
            <li>
                <Option label={optionLabel} />
            </li>
        ))}
    </ul>
);

export default hot(module)(OriginalFunction);