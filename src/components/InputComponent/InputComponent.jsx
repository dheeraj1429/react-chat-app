import React from "react";
import * as input from "./InputComponent.style";

function InputComponent({ label, type, name, onChange, value }) {
    return (
        <input.div>
            <div class="user-box">
                <input type={type} name={name} required="" onChange={onChange} value={value} />
                <label>{label}</label>
            </div>
        </input.div>
    );
}

export default InputComponent;
