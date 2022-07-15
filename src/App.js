import "./App.css";
import React, { useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";
import LogInComponent from "./components/LogInComponent/LogInComponent";
import { Routes, Route } from "react-router-dom";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import { auth, CreateUserProfileDoc } from "./firebase";
import { loginUser } from "./redux/action/indexAction";
import { useDispatch } from "react-redux";
import ChatComponent from "./components/ChatComponent/ChatComponent";
import { useNavigate } from "react-router-dom";
import ChatBoxComponent from "./components/ChatBoxComponent/ChatBoxComponent";

function App() {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                CreateUserProfileDoc(authUser);
                dispatch(loginUser(authUser));
            } else {
                navigation("/signin");
            }
        });
    }, []);

    return (
        <div className="App">
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<ChatComponent />}>
                    <Route path="user/:id" element={<ChatBoxComponent />} />
                </Route>
                {/* <Route path="/login" element={<LogInComponent />} /> */}
                <Route path="/signIn" element={<SignInComponent />} />
            </Routes>
        </div>
    );
}

export default App;
