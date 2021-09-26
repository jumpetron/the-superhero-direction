import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'


const Profile = (props) => {
    const {name, age, salary, picture, country, department} = props.profile
    const userIcon = <FontAwesomeIcon icon={faUserPlus} />
    return (
        <div>
            <div className="card mt-5">
                <div className="card-body profile">
                    <div className="text-center profile-header mb-3">
                        <img src={picture} alt="" />
                    </div>
                    <div>
                        <h5>Name: {name}</h5>
                        <h6>Department: {department}</h6>
                        <p>Age: {age}</p>
                        <p>Country: {country}</p>
                        <p>Salary: ${salary}</p>
                    </div>
                    <div className="text-center mt-3">
                        <button 
                        onClick = {() => props.handleAddToMember(props.profile)} 
                        className="btn m-3">{userIcon} Make Team</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;