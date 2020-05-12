import React from 'react';
import Row from '../row';
import {PersonList} from '../main-component';
import {PersonDetails} from '../main-component'


export default class PeoplePage extends React.Component {
        state ={
            selectedItem:null
        }

        onItemSelected = ( selectedItem ) =>{
            this.setState({
                selectedItem:selectedItem
            })
        }

        render(){

            const { selectedItem } = this.state

            return(
                <Row 
                leftRow={<PersonList onItemSelected={this.onItemSelected}/>}
                rightRow={<PersonDetails itemId={selectedItem}/>}
              />
            );
        }
}