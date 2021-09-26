import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'


const AddMember = (props) => {
    const userIcon = <FontAwesomeIcon icon={faUserPlus} />
    
    const {addMember} = props;
    let total = 0;
    let show = []
    for(const profile of addMember){
        total = parseFloat(total) + parseFloat(profile.salary);
        show = show + profile.name
    }
    return (
        <div>
            <p>{userIcon} Member Added: {props.addMember.length}</p>
            <p>Total Salary: ${total.toFixed(2)}</p>
            <p>{show} </p>
        </div>
    );
};

export default AddMember;