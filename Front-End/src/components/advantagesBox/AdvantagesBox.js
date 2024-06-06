import "../advantagesBox/advantagesBox.css"
import Advantages from "../advantages/Advantages";
import messageIcon from "../../pages/home/icon-chat.png"
import moneyIcon from "../../pages/home/icon-money.png"
import securityIcon from "../../pages/home/icon-security.png"

function AdvantagesBox() {
    return(
        <div className="advantages">
            <Advantages
                imageSrc={messageIcon}
                imageAlt="Icone de messagerie en ligne"
                title="You are our #1 priority"
                subtitle="Need to talk to a representative ? 
                You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.">
            </Advantages>

            <Advantages
                imageSrc={moneyIcon}
                imageAlt="Icone de billet de banque"
                title="More savings means higher rates"
                subtitle="The more you save with us, the higher your interest rate will be!">
            </Advantages>

            <Advantages
                imageSrc={securityIcon}
                imageAlt="Icone de sécurité en ligne"
                title="Security you can trust"
                subtitle="We use top of the line encryption to make sure your data and money is always safe.">
            </Advantages>
        </div>
    )
}

export default AdvantagesBox;