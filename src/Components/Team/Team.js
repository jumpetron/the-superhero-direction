import React, { useEffect, useState } from 'react';
import AddMember from '../Addmember/Addmember';
import Profile from '../Profile/Profile';
import '../Team/Team.css'

const Team = () => {

    const [profiles, setProfile] = useState([])
    const [addMember, setAddMember] = useState([])

    useEffect(() => {
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setProfile(data));
    },[])

    const handleAddToMember = profile => {
        const newAdd = [...addMember, profile]
        setAddMember(newAdd)
    }

    return (
        <div>
            <h3 className="team-title mt-5">Doctro's Profile</h3>
            <div className="team-container me-0">
                <div className="profile-container container">
                    {
                            profiles.map(profile => <Profile
                                key={profile._id}  
                                profile={profile}
                                handleAddToMember = {handleAddToMember}
                                ></Profile>)
                    }
                </div>
                <div className="add-container mt-2">
                    <AddMember addMember={addMember}></AddMember>
                </div>
            </div>
        </div>
    );
};

export default Team;