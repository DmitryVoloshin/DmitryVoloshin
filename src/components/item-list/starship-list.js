import React from 'react';

import './item-list.css'
import SwapiService from '../../service/service';


const StarshipList = ( props ) =>{

  const swapiService = new SwapiService

      const { data ,onItemSelected,children: renderValue } = props


        const items = data.map((item) => {
          const {id} = item;
          const value = renderValue(item);
          const img = swapiService.getStarshipImage({id})
            if(img === img){
                console.log('probl')
            }
           
          return (
             
                <li className="list-group_item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    
            <img src={img} className="person-details_pic"></img>
                
                  {value} 
                </li>
           
          );
        
        });

    return (
        <ul className="item-list_block">
          {items}
        </ul>
    )
}

StarshipList.defaultProps = {
    onItemSelected:()=>{}
}

export default StarshipList;

