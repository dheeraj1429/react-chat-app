import React from "react";
import * as nav from "./NavbarComponent.style";
import { useSelector } from "react-redux";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/action/indexAction";

function NavbarComponent() {
    const loginUser = useSelector((state) => state.index.loginUser);
    const dispatch = useDispatch();

    const logOutHandler = function () {
        auth.signOut();
        dispatch(logOut(null));
    };

    return (
        <nav.div>
            <nav.logoDiv>
                <h5>Logo</h5>
            </nav.logoDiv>
            <nav.innerDiv>
                {!!loginUser ? (
                    <>
                        <nav.userPic
                            style={{
                                backgroundImage: `url(${loginUser.photoURL})`,
                            }}
                        />
                        <CustomButtonComponent InnerText={"Log Out"} btnCl={"logOutButton"} onClick={logOutHandler} />
                    </>
                ) : (
                    <Link to={"/signin"}>
                        <CustomButtonComponent InnerText={"Sign In"} btnCl={"signInButton"} />
                    </Link>
                )}
            </nav.innerDiv>
        </nav.div>
    );
}

export default NavbarComponent;
