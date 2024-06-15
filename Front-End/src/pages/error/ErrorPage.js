import Error404 from "../../components/error404/Error404";
import "../error/errorpage.css"

function ErrorPage() {
    return(
        <div className="errorpage__background">
            <Error404/>
        </div>
    )
}

export default ErrorPage;