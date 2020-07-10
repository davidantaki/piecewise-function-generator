import React, { useState } from 'react';
import { hot } from 'react-hot-loader'

const GraphOption = ({ label, toggle }) => {
    return (
        <>
            <input
                type="checkbox"
                onChange={toggle}
                defaultChecked={true}
            />
            <label>{label}</label>
        </>
    );
}

export default hot(module)(GraphOption);
