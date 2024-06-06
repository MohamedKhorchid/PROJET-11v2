import { NavLink } from "react-router-dom";
import websiteLogo from "../logo/argentBankLogo.png"
import "../logo/logo.css"
 
function Logo() {
    return(
        <div className="logo">
            <NavLink to="/"><img src={websiteLogo} className="logo__style"></img></NavLink>
        </div>
    )
}

export default Logo;