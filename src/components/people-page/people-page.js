import React from 'react';
import ItemList from './../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../service/service';
import Row from '../row';
import ErrorBoundry from '../error-boundry'


// class ErrorBoundry extends React.Component{

//     state = {
//         hasError:false
//     }

//     componentDidCatch(){
//         this.setState({
//             hasError:true
//         })
//     }
//     render(){
//         if(this.state.hasError){
//             return <ErrorIndicator/>
//         }
//         return this.props.children;
//     }
// }

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
        <PersonDetails personId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry>
            <Row leftRow={itemList} rightRow={personDetails}/>
            </ErrorBoundry>
        )
    }
}