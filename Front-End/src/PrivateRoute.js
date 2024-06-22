import { Navigate } from "react-router-dom";
import User from "./pages/user/User";
import { useSelector } from "react-redux";

function PrivateRoute() {
    const token = useSelector((state) => state.auth.token)

    return (
        <div>
            {token ? <User/> : <Navigate to="/sign-in"/>}
        </div>
    )
}

export default PrivateRoute