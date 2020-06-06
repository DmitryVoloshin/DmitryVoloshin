// import React from 'react';

// import './item-list.css'




// const ItemList = ( props ) =>{

//       const { data ,onItemSelected,children: renderValue } = props

//         const items = data.map((item) => {
//           const {id} = item;
//           const value = renderValue(item)
          
//           return (
//             <li className="list-group_item"
//                 key={id}
//                 onClick={() => onItemSelected(id)}>
//               {value} 
//             </li>
//           );
//         });

//     return (
//         <ul className="item-list_block">
//           {items}
//         </ul>
//     )
// }

// ItemList.defaultProps = {
//     onItemSelected:()=>{}
// }

// export default ItemList;


import React from 'react';

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
      // <div className="list-group_block">
        <ul className="item-list_block">
          {items}
        </ul>
      // </div>
    )
}

ItemList.defaultProps = {
    onItemSelected:()=>{}
}

export default ItemList;