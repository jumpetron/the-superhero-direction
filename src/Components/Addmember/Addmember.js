import React from 'react';

const AddMember = (props) => {
    
    const {addMember} = props;
    let total = 0;
    for(const profile of addMember){
        total = parseFloat(total) + parseFloat(profile.salary);
    }
    return (
        <div>
            <p>Total Add Member: {props.addMember.length}</p>
            <p>Total Salary: ${total.toFixed(2)}</p>
            
        </div>
    );
};

export default AddMember;