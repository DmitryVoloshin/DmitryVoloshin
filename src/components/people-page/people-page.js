import React from 'react';
import ItemList from './../item-list';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/service';
import Row from '../row';
import ErrorBoundry from '../error-boundry'
import ItemDetails from '../item-details';



export default class PeoplePage extends React.Component{

    swapiService = new SwapiService()


    state ={
        selectedPerson : 3,
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

        const itemList = (
        <ItemList onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={(item)=> `${item.name}(${item.gender}, ${item.birthYear})`}>
        </ItemList>
        );
        const personDetails = (
        <ItemDetails personId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry>
            <Row leftRow={itemList} rightRow={personDetails}/>
            <div></div>
            </ErrorBoundry>
        )
    }
}