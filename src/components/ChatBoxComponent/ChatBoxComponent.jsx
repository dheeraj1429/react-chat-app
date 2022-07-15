import React, { useEffect, useState } from "react";
import * as chat from "./ChatBoxComponent.style";
import MessageComponent from "../MessageComponent/MessageComponent";
import UserMessageComponent from "../UserMessageComponent/UserMessageComponent";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ChatBoxComponent() {
    const [UserMessages, setUserMessages] = useState([]);
    const id = useParams().id;
    const loginUser = useSelector((state) => state.index.loginUser);

    useEffect(() => {
        db.collection("users")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapShot) => {
                setUserMessages(
                    snapShot.docs.map((el) => ({
                        id: el.id,
                        data: el.data(),
                    }))
                );
            });
    }, [id]);

    return (
        <chat.div>
            <chat.chatScreen>
                {UserMessages && !!UserMessages.length && loginUser && loginUser.uid
                    ? UserMessages.map((el) => (
                          <UserMessageComponent isUser={loginUser.uid === el.data.uid ? true : false} key={el.id} data={el.data} />
                      ))
                    : null}
            </chat.chatScreen>
            <MessageComponent />
        </chat.div>
    );
}

export default ChatBoxComponent;
