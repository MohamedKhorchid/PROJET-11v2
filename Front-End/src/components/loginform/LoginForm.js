import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { loginUser } from "../../actions/authentication.action.js"
import { useNavigate  } from "react-router-dom";
import "../../components/loginform/loginform.css"

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    function signIn(e) {
        e.preventDefault()
        dispatch(loginUser(email, password, navigate, remember))
    }


    const loginError = useSelector((state) => state.auth.loginError)
    
    let errorMessage = ""
    if (loginError) {
        errorMessage = <span className="form__error__message">{loginError}</span>
    }


    return(
        <div className="form__box">
            <form className="form" onSubmit={signIn}>
                <div className="form__title">
                    <i className="fa fa-user-circle"></i>
                    <span className="form__title__text">Sign In</span>
                </div>

                <label htmlFor="username" className="form__label">Username</label>
                <input type="text" id="username" className="form__input" onChange={(e) => setEmail(e.target.value)} required autoComplete="username"/>

                <label htmlFor="password" className="form__label">Password</label>
                <input type="password" id="password" className="form__input" onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />

                <div className="remember__box">
                    <input type="checkbox" id="remember" className="form__checkbox" onChange={(e) => setRemember(e.target.checked)}/>
                    <label htmlFor="remember" className="form__remember">Remember me</label>
                </div>

                {errorMessage}

                <input type="submit" value="Sign In" className="form__submit"/>
            </form>
        </div>
    )
}

export default LoginForm