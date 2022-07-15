import React from "react";
import * as chat from "./ChatComponent.style";
import AdminSidebarComponent from "../AdminSidebarComponent/AdminSidebarComponent";
import AllusersComponet from "../AllusersComponet/AllusersComponet";
import { Outlet } from "react-router";

function ChatComponent() {
    return (
        <chat.div>
            <AdminSidebarComponent />
            <AllusersComponet />

            <chat.chatBox>
                <Outlet />
            </chat.chatBox>
        </chat.div>
    );
}

export default ChatComponent;
