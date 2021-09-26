import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'


const Profile = (props) => {
    const {name, age, salary, deg, picture, country, department} = props.profile
    const element = <FontAwesomeIcon icon={faUserPlus} />
    return (
        <div>
            <div className="card mt-5">
                <div className="card-body profile">
                    <div className="text-center profile-header">
                        <img src={picture} alt="" />
                        <h5>Name: {name} <small className="fs-6">({deg})</small></h5>
                    </div>
                    <div>
                        <h6>Department: {department}</h6>
                        <p>Age: {age}</p>
                        <p>Country: {country}</p>
                        <p>Salary: ${salary}</p>
                    </div>
                    <div className="text-center">
                        <button 
                        onClick = {() => props.handleAddToMember(props.profile)} 
                        className="btn btn-primary m-3">{element} Make Team</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;