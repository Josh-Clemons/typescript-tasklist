import React from 'react';
import './InputForm.css'

const InputForm = () => {
    return (
        <div className="inputForm">
            <h3 className="enterTaskHeader">Enter Task</h3>
            <div className="inputFieldHolder">
                <input type="text" className="taskInputField" placeholder='Enter Task Here' />
                <div className="submitButton">Ok</div>
            </div>
        </div>
    )
}

export default InputForm;