import "../welcome/welcome.css"
import { fetchUserProfile, updateUserName } from "../../actions/user.action.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const userProfile = useSelector((state) => state.user.userProfile)

    
    const [isEditing, setIsEditing] = useState(false);


    function editButtonClick() {
        setIsEditing(true)
    }


    const [newUserName, setNewUserName] = useState(userProfile.userName);



    function cancelButtonClick(e) {
        e.preventDefault()
        setIsEditing(false)
        setNewUserName(userProfile.userName)
    }


    const dispatch = useDispatch()
    const navigate = useNavigate()

    function saveButtonClick(e) {
        e.preventDefault()
        dispatch(updateUserName(newUserName, navigate))
        setIsEditing(false)
    }


    useEffect(() => {
        dispatch(fetchUserProfile())
    }, [dispatch])

    
    useEffect(() => {
        setNewUserName(userProfile.userName);
    }, [userProfile])
  

    return(
        <div >
            {isEditing ? (
                <div className="welcome">
                    <form className="edit__form">
                        <h2 className="edit__form__title">Edit user info</h2>

                        <div className="label__input">
                            <div className="edit__form__label__input">
                                <label htmlFor="username" className="edit__form__label">User Name:</label>
                                <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} className="edit__form__input" id="username" />
                            </div>

                            <div className="edit__form__label__input">
                                <label htmlFor="firstname" className="edit__form__label">First Name:</label>
                                <input type="text" value={userProfile.firstName} readOnly className="edit__form__input__unchanged" id="firstname"/>
                            </div>

                            <div className="edit__form__label__input">
                                <label htmlFor="lastname" className="edit__form__label">Last Name :</label>
                                <input type="text" value={userProfile.lastName} readOnly className="edit__form__input__unchanged" id="lastname"/>
                            </div>
                        </div>

                        <div className="edit__form__buttons">
                            <button className="edit__form__buttons__style" onClick={saveButtonClick}>Save</button>
                            <button className="edit__form__buttons__style" onClick={cancelButtonClick}>Cancel</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="welcome">
                    <p className="welcome__text">
                        Welcome back {userProfile.firstName} {userProfile.lastName}!
                    </p>
                    <button className="welcome__text__edit" onClick={editButtonClick}>Edit Name</button>
                </div>
            )}
        </div>
    )
}

export default Welcome;