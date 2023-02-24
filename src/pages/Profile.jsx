import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    return (<>
        <button><Link to="/" className="btn">Вернуться на главную</Link></button>
        <div className="wrapper">
            <h1 className="about">Личный кабинет</h1>
        </div>
    </>)
};

export default Profile;