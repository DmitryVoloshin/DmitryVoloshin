import React from 'react';
import Loader from '../loader';


import './item-list.css'


export default class ItemList extends React.Component{


    state ={
        itemList:null,
    };

    componentDidMount(){

        const { getData } = this.props;

          getData().then((itemList)=>{
                this.setState({
                    itemList
                });
            });
    }


    renderItems(arr) {
        return arr.map(({id, name}) => {
          return (
            <li className="list-group_item"
                key={id}
                onClick={() => this.props.onItemSelected(id)}>
              {name}
            </li>
          );
        });
      }


    render(){

        const { itemList } = this.state;
     

        if(!itemList){
            return <Loader/>
        };

     
        const items = this.renderItems(itemList)

    return (
        <ul className="item-list_block">
          {items}
        </ul>
    )
}
};

//some
//commit