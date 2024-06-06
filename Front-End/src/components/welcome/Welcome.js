import "../welcome/welcome.css"

function Welcome({ userName }) {
    return(
        <div className="welcome">
            <p className="welcome__text">
                Welcome back {userName} !
            </p>

            <button className="welcome__text__edit">Edit Name</button>
        </div>
    )
}

export default Welcome;