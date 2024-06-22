import { USER_LOGIN_SUCCESS, USER_REMEMBER_TOKEN, USER_LOGIN_FAILURE, LOGOUT_USER } from "../actions/authentication.action.js"

const initialState = {
    loginError: null,
    isAuthenticated: false,
    token: null,
}

const authentificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loginError: null,
                isAuthenticated: true,
                token: action.payload,
            }
        
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                loginError: action.payload,
                isAuthenticated: false,
                token: null,
            }

        case LOGOUT_USER:
            return {
                ...state,
                loginError: null,
                isAuthenticated: false,
                token: null,
            }

        default:
            return state
    }
}

export default authentificationReducer