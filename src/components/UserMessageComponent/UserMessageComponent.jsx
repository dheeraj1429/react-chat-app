import React from "react";
import * as message from "./UserMessageComponent.style";

function UserMessageComponent({ isUser, data }) {
    return (
        <message.div className={isUser ? "currentUser" : null}>
            <message.messageDiv>
                <p>{data.message}</p>
                <span>{data.displayName}</span>
            </message.messageDiv>
        </message.div>
    );
}

export default UserMessageComponent;
