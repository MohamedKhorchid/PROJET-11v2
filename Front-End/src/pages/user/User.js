import Welcome from "../../components/welcome/Welcome";
import Accounts from "../../components/accounts/Accounts"
import "../user/user.css"

function User() {
    return(
        <div className="user__background">
            <Welcome/>
           <Accounts
           accountName="Argent Bank Checking (x8349)"
           accountAmount="$2,082.79">
           </Accounts>
           <Accounts
           accountName="Argent Bank Savings (x6712)"
           accountAmount="$10,928.42">
           </Accounts>
           <Accounts
           accountName="Argent Bank Credit Card (x8349)"
           accountAmount="$184.30">
           </Accounts>
        </div>
    )
}

export default User;