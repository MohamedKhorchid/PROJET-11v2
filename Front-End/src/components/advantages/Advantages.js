import "../advantages/advantages.css"

function Advantages({ imageSrc, imageAlt, title, subtitle }) {
    return(
            <div className="advantages__detail">
                <div className="advantages__detail__image">
                    <img src={imageSrc} alt={imageAlt} className="advantages__image"></img>
                </div>

                <div className="advantages__detail__titlesubtitle">
                    <p className="advantages__detail__title">
                        {title}
                    </p>

                    <p className="advantages__detail__subtitle">
                        {subtitle}
                    </p>
                </div>
            </div>
    )
}

export default Advantages;
