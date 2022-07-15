import ACTION_TYPE from "../actionTypes/ActionType";

const INITAL_STATE = {
    loginUser: null,
};

const userReducer = function (state = INITAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPE.SET_USER_LOGIN:
            return {
                ...state,
                loginUser: action.payload,
            };

        case ACTION_TYPE.LOG_OUT:
            return {
                ...state,
                loginUser: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
