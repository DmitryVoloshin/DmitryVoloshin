import React from 'react';

import './item-list.css'
import SwapiService from '../../service/service';




const ItemList = ( props ) =>{



      const { data ,onItemSelected,children: renderValue } = props

        const items = data.map((item) => {
          const {id} = item;
          const value = renderValue(item);
          
          
        
          
          return (
             
                <li className="list-group_item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
            <img src="" alt="" className="person-details_pic"></img>
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

ItemList.defaultProps = {
    onItemSelected:()=>{}
}

export default ItemList;

