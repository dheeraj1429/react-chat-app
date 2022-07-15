import React, { useState, useEffect } from "react";
import * as message from "./MessageComponent.style";
import { FiSend } from "@react-icons/all-files/fi/FiSend";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import firebase from "../../firebase";
import { useSelector } from "react-redux";

function MessageComponent() {
    const [Message, setMessage] = useState("");
    const id = useParams().id;
    const user = useSelector((state) => state.index.loginUser);

    const changeHandler = function (event) {
        const value = event.target.value;
        setMessage(value);
    };

    const SendMessage = function () {
        db.collection("users").doc(id).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            message: Message,
        });

        setMessage("");
    };

    return (
        <message.div>
            <message.sendDiv>
                <input type="text" placeholder="send" onChange={changeHandler} value={Message} />
                <div className="send_icons_div">
                    <FiSend onClick={SendMessage} />
                </div>
            </message.sendDiv>
        </message.div>
    );
}

export default MessageComponent;
