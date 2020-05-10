import React from 'react';
import SwapiService from '../../service/service';


import './item-details.css'


export default class ItemDetails extends React.Component{

    swapiService = new SwapiService();

    state ={
        item:null,
    };

    //lifecycle start
    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }
    //lifecycle end

    updateItem(){
        const { itemId,getData } = this.props;
        if(!itemId){
            return;
        }
        getData(itemId)
            .then((item)=>{
                this.setState({item})
            })
    };

    render(){

        const { item } = this.state
        if(!item){
            return <span>Chose person</span>
        }

        const { id, name, gender,
            birthYear, eyeColor } = item;

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

