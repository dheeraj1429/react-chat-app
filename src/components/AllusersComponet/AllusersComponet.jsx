import React, { useState, useEffect } from "react";
import * as user from "./AllusersComponet.style";
import UserCardsComponent from "../UserCardsComponent/UserCardsComponent";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

function AllusersComponet() {
    const [Users, setUsers] = useState(null);

    useEffect(() => {
        db.collection("users").onSnapshot((snapShot) => {
            setUsers(
                snapShot.docs.map((el) => {
                    if (el.data().admin == "user") {
                        return {
                            id: el.id,
                            data: el.data(),
                        };
                    }
                })
            );
        });
    }, []);

    return (
        <user.div>
            {!!Users
                ? Users.map((el) =>
                      !!el ? (
                          <Link to={`/user/${el.id}`}>
                              <UserCardsComponent data={el} key={el.id} />
                          </Link>
                      ) : null
                  )
                : null}
        </user.div>
    );
}

export default AllusersComponet;
