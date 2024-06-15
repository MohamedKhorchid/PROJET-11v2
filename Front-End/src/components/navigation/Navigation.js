import { NavLink, useNavigate } from "react-router-dom";
import "../navigation/navigation.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../actions/user.action";
import { logoutUser } from "../../actions/authentication.action";
import { useEffect } from "react";

function Navigation() {
    const tokenLocalStorage = localStorage.getItem("token")
    const tokenSessionStorage = sessionStorage.getItem("token")
    const token = tokenLocalStorage || tokenSessionStorage

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const signOut = (e) => {
        e.preventDefault()
        dispatch(logoutUser())
        navigate("/sign-in")
    }
    

    useEffect(() => {
        if (token) {
            dispatch(fetchUserProfile());
        }
    }, [token])

    const userProfile = useSelector((state) => state.user.userProfile)


    if (token) {
        return (
            <div className="navigation">
                <ul className="navigation__list signout__list">
                    <NavLink to="/user">
                        <li className="navigation__list__item signout__list__item">
                            <i className="fa fa-user-circle"></i>
                            {userProfile.userName}
                        </li>
                    </NavLink>
                    <NavLink onClick={signOut}>
                        <li className="navigation__list__item signout__list__item">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </li>
                    </NavLink> 
                </ul>
            </div>
        )
    } else {
        return(
            <div className="navigation">
                <ul className="navigation__list">
                    <NavLink to="/sign-in">
                        <li className="navigation__list__item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </li>
                    </NavLink>
                </ul>
            </div>
        )
    }
}

export default Navigation;