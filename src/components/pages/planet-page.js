import React from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails} from '../main-component';


export default class PlanetPage extends React.Component {
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
                leftRow={<PlanetList onItemSelected={this.onItemSelected}/>}
                rightRow={<PlanetDetails itemId={selectedItem}/>}
              />
            );
        }
}