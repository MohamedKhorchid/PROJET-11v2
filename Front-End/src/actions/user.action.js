export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";


export const fetchUserProfile = () => {
    return (dispatch) => {
        let token = localStorage.getItem("token") || sessionStorage.getItem("token");

        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                console.log("Failed to fetch user profile")
            }
        })
            
        .then((data) => {
            const userProfile = data.body
            dispatch({
                type: USER_PROFILE,
                payload: userProfile,
            })
        })
            
        .catch((error) => {
            console.log("une erreur s'est produite lors de la récupération des informations")
        })
    }
}


export const updateUserName = (userName, navigate) => {
    return (dispatch) => {
        let token = localStorage.getItem("token") || sessionStorage.getItem("token")

        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName }),
        })
        
        .then((response) => {
            if (response.ok) {
                dispatch({
                    type: UPDATE_USER_NAME,
                    payload: userName,
                })
            } else if (response.status === 401) {
                localStorage.removeItem("token")
                sessionStorage.removeItem("token")
                navigate("/sign-in")
            } else {
                console.log("Failed to update user name")
            }
        })
    
        .catch((error) => {
            console.log("une erreur est survenue lors de l'édition du nom d'utilisateur")
        })
    }
}
