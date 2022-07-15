import React, { useState } from "react";
import * as login from "./LogInComponent.style";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
import { Link } from "react-router-dom";

function LogInComponent() {
    const [Login, setLogin] = useState({
        userName: "",
        password: "",
    });

    const ChangeHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...Login, [name]: value });
    };

    return (
        <login.div>
            <div class="login-box">
                <h3>Login Form</h3>
                <InputComponent label={"userName"} type={"text"} name="userName" onChange={ChangeHandler} value={Login.userName} />
                <InputComponent label={"password"} type={"password"} name="password" onChange={ChangeHandler} value={Login.password} />
                <CustomButtonComponent InnerText={"Log In"} btnCl={"LogInButton"} />
                <Link to={"/signIn"}>
                    <p>Sign In</p>
                </Link>
            </div>
        </login.div>
    );
}

export default LogInComponent;
