import { NavLink } from "react-router-dom";
import "../navigation/navigation.css"

function Navigation() {
    return(
        <div className="navigation">
            <ul className="navigation__list">
                <NavLink to="/sign-in"><li className="navigation__list__item"><i className="fa fa-user-circle"></i>Sign In</li></NavLink>
            </ul>
            
        </div>
    )
}

export default Navigation;