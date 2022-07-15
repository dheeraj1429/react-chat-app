import React, { useState, useEffect } from "react";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
import * as signIn from "./SignInComponent.style";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase";
import { db } from "../../firebase";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignInComponent() {
    const loginUser = useSelector((state) => state.index.loginUser);

    const [Login, setLogin] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = Login;
    const navigation = useNavigate();

    const ChangeHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...Login, [name]: value });
    };

    useEffect(() => {
        if (!!loginUser) {
            navigation("/");
        }
    }, [loginUser]);

    // const siginInUser = async function () {
    //     await db.collection("loginUsers").onSnapshot((snapShot) => {
    //         snapShot.docs.map((el) => {
    //             const id = el.id;
    //             const data = el.data();

    //             if (data.email === email) {
    //                 console.log("user already exist");
    //             } else {
    //                 db.collection("loginUsers")
    //                     .add({
    //                         name,
    //                         email,
    //                         password,
    //                         admin: "user",
    //                     })
    //                     .then((res) => {
    //                         console.log(res);
    //                     });
    //             }
    //         });
    //     });
    // };

    return (
        <signIn.div>
            <div class="login-box">
                <h3>Login Form</h3>
                {/* <InputComponent label={"name"} type={"text"} name="name" onChange={ChangeHandler} value={Login.userName} /> */}
                {/* <InputComponent label={"email"} type={"text"} name="email" onChange={ChangeHandler} value={Login.userName} /> */}

                {/* <InputComponent label={"password"} type={"password"} name="password" onChange={ChangeHandler} value={Login.password} /> */}
                {/* <CustomButtonComponent InnerText={"Sign up"} btnCl={"LogInButton"} onClick={siginInUser} /> */}
                <CustomButtonComponent InnerText={"Sign in With Google"} btnCl={"LogInButton"} onClick={() => signInWithGoogle()} />
                <Link to={"/login"}>{/* <p>Login</p> */}</Link>
            </div>
        </signIn.div>
    );
}

export default SignInComponent;
