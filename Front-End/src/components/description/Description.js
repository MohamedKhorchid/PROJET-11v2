import bankTree from "../description/bank-tree.jpeg"
import "../description/description.css"

function Description() {
    return(
        <div className="description">
            <div className="description__image">
                <img src={bankTree} className="description__image__background"></img>
            </div>

            <div className="description__text">
                <p className="description__text__title">
                    No fees. 
                    <br/>
                    No minimum deposit. 
                    <br/>
                    High interest rates.
                </p>

                <p className="description__text__subtitle">
                    Open a savings account with Argent Bank today !
                </p>
            </div>
        </div>
    )
}

export default Description;