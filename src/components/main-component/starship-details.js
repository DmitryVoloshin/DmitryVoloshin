import React from 'react';

import ItemDetails,{ Record } from '../item-details';



import { withService } from '../HOC'
import Header from '../header';


const StarshipDetails = ( props ) =>{

        return(
            <div>
                <Header/>
                <ItemDetails {...props}>
        
                     <Record field="model" label="Model"/>
                     <Record field="length" label="Length"/>
                     <Record field="costInCredits" label="Cost"/>

                 </ItemDetails>
                 </div>
                    )
                }
      


const matMethodsToProps = (swapiService) =>{
    return{
        getData:swapiService.getStarship,
        getImageUrl:swapiService.getStarshipImage
    }
}

export default withService(matMethodsToProps)(StarshipDetails);