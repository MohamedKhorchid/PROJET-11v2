export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const LOGOUT_USER = "LOGOUT_USER"


export const userLoginSuccess = (token) => ({
    type: USER_LOGIN_SUCCESS,
    payload: token,
})


export const userLoginFailure = (error) => ({
    type: USER_LOGIN_FAILURE,
    payload: error,
})


export const logoutUser = () => ({
    type: LOGOUT_USER,
})


export const loginUser = (email, password, navigate, remember) => {
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, remember}),
        })

        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                console.log("Login failed")
            }
        })

        .then((data) => {
            const token = data.body.token
            dispatch(userLoginSuccess(token))
            navigate("/user")
        })

        .catch((error) => {
            dispatch(userLoginFailure("identifiants incorrects"))
        })
    }
}
