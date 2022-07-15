import React from "react";
import * as user from "./UserCardsComponent.style";

function UserCardsComponent({ data }) {
    return (
        <user.div>
            <user.usrProfile>
                <user.userProfile
                    style={{
                        backgroundImage: `url(${data.data.photoURL})`,
                    }}
                ></user.userProfile>
                <user.userContent>
                    <h5>{data.data.displayName}</h5>
                    <p>{data.data.email}</p>
                </user.userContent>
            </user.usrProfile>
        </user.div>
    );
}

export default UserCardsComponent;
