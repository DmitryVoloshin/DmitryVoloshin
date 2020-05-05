import React from 'react';
import SwapiService from '../../service/service';


import './person-details.css'


export default class PersonDetails extends React.Component{

    swapiService = new SwapiService();

    state ={
        person:null,
    };

    //lifecycle start
    componentDidMount(){
        this.updatePerson();
    }

    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }
    //lifecycle end

    updatePerson(){
        const { personId } = this.props;
        if(!personId){
            return;
        }
        this.swapiService
            .getPerson(personId)
            .then((person)=>{
                this.setState({person})
            })
    };

    render(){

        if(!this.state.person){
            return <span>Chose person</span>
        }

        const { id, name, gender,
            birthYear, eyeColor } = this.state.person;

    return (
        <div className="person-details_list">
            <img  src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt="person pic" className="person-details_pic"></img>
            <div>
                <h3 className="person-details_title">{name}</h3>
                <ul>
                    <li className="person-details_item">
                        <span>Geneder</span>
                        <span>{gender}</span>
                    </li>
                    <li className="person-details_item">
                        <span>eyeColor</span>
                        <span>{eyeColor}</span>
                    </li>
                    <li className="person-details_item">
                        <span>Datebirth</span>
                        <span>{birthYear}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
}

