import React from "react";
import * as admin from "./AdminSidebarComponent.style";
import { useSelector } from "react-redux";

function AdminSidebarComponent() {
    // const [Admin, setAdmin] = useState(null);
    const loginUser = useSelector((state) => state.index.loginUser);

    // useEffect(() => {
    //     db.collection("users").onSnapshot((snapShot) => {
    //         snapShot.docs.map((el) => {
    //             if (el.data().admin === "admin") {
    //                 const adminObj = new Object();
    //                 adminObj.data = el.data();
    //                 adminObj.id = el.id;
    //                 setAdmin(adminObj);
    //             }
    //         });
    //     });
    // }, []);

    return (
        <admin.div>
            {!!loginUser ? (
                <admin.adminDiv id={loginUser.uid}>
                    <admin.sp>
                        <admin.adminProfileDiv
                            style={{
                                backgroundImage: `url(${loginUser.photoURL})`,
                            }}
                        />
                    </admin.sp>
                    <admin.adminContnet>
                        <h5>{loginUser.displayName}</h5>
                        <p>{loginUser.email}</p>
                        <p>{loginUser.admin}</p>
                    </admin.adminContnet>
                </admin.adminDiv>
            ) : null}
        </admin.div>
    );
}

export default AdminSidebarComponent;
