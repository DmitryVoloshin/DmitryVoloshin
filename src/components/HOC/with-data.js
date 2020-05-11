import React from 'react';
import Loader from '../loader'
import ErrorBoundry from '../error-boundry';


const withData = ( View ,getData ) =>{
    return class extends React.Component {
      state ={
        data:null,
    };
    componentDidMount(){
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
  
        return <ErrorBoundry>
                    <View {...this.props} data={data}/>
                </ErrorBoundry>
      }
    }
  };

export default withData