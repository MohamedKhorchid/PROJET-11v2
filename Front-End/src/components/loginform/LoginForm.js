import "../loginform/loginform.css"

function LoginForm() {
    return(
        <div className="form__box">
            <form className="form">
                <div className="form__title">
                    <i className="fa fa-user-circle"></i>
                    <span className="form__title__text">Sign In</span>
                </div>

                <label for="username" className="form__label">Username</label>
                <input type="textarea" id="username" className="form__input"/>

                <label for="password" className="form__label">Password</label>
                <input type="password" id="password" className="form__input"/>

                <div className="remember__box">
                    <input type="checkbox" id="remember" className="form__checkbox"/>
                    <label for="remember" className="form__remember">Remember me</label>
                </div>

                <input type="submit" value="Sign In" className="form__submit"/>
            </form>
        </div>
    )
}

export default LoginForm;