import React from 'react';
import Row from '../row';
import {StarshipList,StarshipDetails} from '../main-component';


export default class StarshipPage extends React.Component {
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
                leftRow={<StarshipList onItemSelected={this.onItemSelected}/>}
                rightRow={<StarshipDetails itemId={selectedItem}/>}
              />
            );
        }
}