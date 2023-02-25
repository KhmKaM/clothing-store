import React from "react";
import { Link } from "react-router-dom";
import FormProfile from "../components/FormProfile";

const Profile = () => {
    return (<>
        <div className="section-wrapper">
            <div className="btn-wrapper"><button><Link to="/" className="btn">Вернуться на главную</Link></button></div>
            <div className="wrapper">
                <h1 className="about">Личный кабинет</h1>
            </div>
        </div>
        <div>
        <FormProfile/>
        </div>
    </>)
};

export default Profile;