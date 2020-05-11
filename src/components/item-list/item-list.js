import React from 'react';
import Loader from '../loader';


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



const withData = ( View ) =>{
  return class extends React.Component {
    state ={
      data:null,
  };
  componentDidMount(){

      const { getData } = this.props;

        getData().then((data)=>{
              this.setState({
                  data
              });
          });
  }
    render(){

      const { data } = this.state;
     
      if(!data){
          return <Loader/>
      };

      return <View {...this.props} data={data}/>
    }
  }
};

export default withData(ItemList);