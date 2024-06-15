import { USER_PROFILE, UPDATE_USER_NAME } from "../actions/user.action.js"

const initialState = {
    userProfile: "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_PROFILE:
            return {
                ...state, 
                userProfile: action.payload,
            }

        case UPDATE_USER_NAME:
            const newProfile = { 
                ...state.userProfile, 
                userName: action.payload 
            }
            return {
                ...state,
                userProfile: newProfile,
            }

        default:
            return state
    }
}

export default userReducer