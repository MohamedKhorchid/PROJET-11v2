import "../error404/error404.css"
import { NavLink } from "react-router-dom"

function Error404() {
    return (
        <div>
            <div className="error404">
                <p className="error404__text">
                    La page que vous recherchez n'existe pas.
                    Vous êtes déja client ?
                    <NavLink to="/sign-in" className="error404__redirect">Connectez-vous juste ici ! </NavLink>
                    Pas encore de compte ?
                    <NavLink to="/" className="error404__redirect">Découvrez nos services.</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Error404