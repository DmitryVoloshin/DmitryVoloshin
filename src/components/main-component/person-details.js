import React from 'react';

import ItemDetails,{ Record } from '../item-details';

import { withService } from '../HOC';
import Header from '../header';

const PersonDetails = ( props ) =>{
    return(       
      <div>
        <Header/>
        <ItemDetails {...props}>
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      </div>
    )

}

const mapMethodsToProps = (swapiService) =>{
  return{
    getData: swapiService.getPerson,
    getImageUrl:swapiService.getPersonImage,
  }
}

export default withService(mapMethodsToProps)(PersonDetails);