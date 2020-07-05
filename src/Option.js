import React, { useState } from 'react';
import { hot } from 'react-hot-loader'

const Option = ({ label }) => {
    const [checked, setChecked] = useState(true);

    return (
        <>
            <input type="checkbox" />
            <label>{label}</label>
        </>
    );
}

export default hot(module)(Option);
