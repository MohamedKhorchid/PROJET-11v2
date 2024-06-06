import "../accounts/account.css"

function Accounts({ accountName, accountAmount }) {
    return(
        <div className="accounts__background">
            <div className="accounts__identity">
                <span className="accounts__identity__name">{accountName}</span>
                <span className="accounts__identity__amount">{accountAmount}</span>
                <span className="accounts__identity__balance">Available Balance</span>
            </div>
            

            <div className="accounts__transactions"> 
                <button className="accounts__transactions__button">View transactions</button>
            </div>    
        </div>
    )
}

export default Accounts; 