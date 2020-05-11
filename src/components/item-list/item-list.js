import React from 'react';

import SwapiService from '../../service/service';
import { withData } from '../HOC';

import './item-list.css'




const ItemList = ( props ) =>{

      const { data ,onItemSelected,children: renderValue } = props

        const items = data.map((item) => {
          const {id} = item;
          const value = renderValue(item)
          
          return (
            <li className="list-group_item"
                key={id}
                onClick={() => onItemSelected(id)}>
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


const { getAllPeople } = new SwapiService()

export default withData(ItemList,getAllPeople);