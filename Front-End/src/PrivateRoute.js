import { Navigate } from "react-router-dom";
import User from "./pages/user/User";

function PrivateRoute() {
    let token = localStorage.getItem("token") || sessionStorage.getItem("token")

    return (
        <div>
            {token ? <User/> : <Navigate to="/sign-in"/>}
        </div>
    )
}

export default PrivateRoute