import React from 'react';
import ItemList from './../item-list';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/service';
import Row from '../row';
import ErrorBoundry from '../error-boundry'
import ItemDetails from '../item-details';



export default class StarShip extends React.Component{

    swapiService = new SwapiService()


    state ={
        selectedShip : 1,
    }


 

    onShipSelected = ( selectedShip ) =>{
        this.setState( {
          selectedShip
        })
      };

    render(){

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        const itemList = (
        <ItemList onItemSelected={this.onShipSelected}
        getData={this.swapiService.getAllStarships}
        renderItem={(item)=> `${item.name}(${item.gender}, ${item.birthYear})`}>
        </ItemList>
        );
        const personDetails = (
        <ItemDetails personId={this.state.selectedShip}/>
        );

        return (
            <ErrorBoundry>
            <Row leftRow={itemList} rightRow={personDetails}/>
            </ErrorBoundry>
        )
    }
}