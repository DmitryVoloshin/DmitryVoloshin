import React from 'react';

import ItemDetails,{ Record } from '../item-details';

import { ServiceConsumer } from '../service-context';

import { withService } from '../HOC';

const PersonDetails = ( {itemId , swapiService} ) =>{
    const { getPerson,getPersonImage } = swapiService
    return(       
        <ItemDetails 
        itemId={itemId}
        getData={getPerson}
        getImage={getPersonImage}>
  
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
  
        </ItemDetails>
    )

}

export default withService(PersonDetails)