import React from 'react';

import ItemDetails,{ Record } from '../item-details';



import { withService } from '../HOC'


const StarshipDetails = ( props ) =>{

        return(
                <ItemDetails {...props}>
                  
                     <Record field="model" label="Model"/>
                     <Record field="length" label="Length"/>
                     <Record field="costInCredits" label="Cost"/>
    
                 </ItemDetails>
                    )
                }
      


const matMethodsToProps = (swapiService) =>{
    return{
        getData:swapiService.getStarship,
        getImageUrl:swapiService.getStarshipImage
    }
}

export default withService(StarshipDetails,matMethodsToProps)