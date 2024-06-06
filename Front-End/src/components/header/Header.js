import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation"
import "../header/header.css"

function Header() {
    return(
        <div className="header">
            <Logo/>
            <Navigation/>
        </div>
    )
}

export default Header;