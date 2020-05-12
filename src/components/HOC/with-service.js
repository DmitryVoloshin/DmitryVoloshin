import React from 'react';
import { ServiceConsumer } from '../service-context';

const withService = (Wrapped,mapMethodsToProps) =>{
    return (props) =>{
        return (<ServiceConsumer>
            {
                (swapiService) =>{
                    const serviceProps = mapMethodsToProps(swapiService)
                    return(
                        <Wrapped {...props} {...serviceProps}/>
                    )
                }
            }
        </ServiceConsumer>
        );
    }
}

export default withService;