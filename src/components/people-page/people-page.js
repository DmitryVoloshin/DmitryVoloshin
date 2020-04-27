import React from 'react';
import ItemList from './../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/service';

export default class PeoplePage extends React.Component{

    swapiService = new SwapiService()



    state ={
        selectedPerson : 3,
        hasError:false
    }


    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }

    onPersonSelected = ( selectedPerson ) =>{
        this.setState( {
          selectedPerson
        })
      };

    render(){

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return (
        <main className="main-content_block">
        <ItemList onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}/>
        <PersonDetails personId={this.state.selectedPerson}/>
        </main>
        )
    }
}