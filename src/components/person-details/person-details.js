import React from 'react';

import './person-details.css'

const PersonDetails = ( ) =>{
    return (
        <div className="person-details_list">
            <img alt="person pic" className="person-details_pic"></img>
            <div>
                <h3 className="person-details_title">Title(name)</h3>
                <ul>
                    <li className="person-details_item">
                        <span>Name</span>
                        <span>The Name</span>
                    </li>
                    <li className="person-details_item">
                        <span>Gender</span>
                        <span>The Gender</span>
                    </li>
                    <li className="person-details_item">
                        <span>Datebirth</span>
                        <span>The date</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PersonDetails