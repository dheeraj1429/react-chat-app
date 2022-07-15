import ACTION_TYPE from "../actionTypes/ActionType";

export const loginUser = function (data) {
    return {
        type: ACTION_TYPE.SET_USER_LOGIN,
        payload: data,
    };
};

export const logOut = function (data) {
    return {
        type: ACTION_TYPE.LOG_OUT,
        payload: data,
    };
};
