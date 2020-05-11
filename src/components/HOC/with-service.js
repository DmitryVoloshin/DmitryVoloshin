import React from 'react';
import { ServiceConsumer } from '../service-context';

const withService = (Wrapped) =>{
    return (props) =>{
        return (<ServiceConsumer>
            {
                (swapiService) =>{
                    return(
                        <Wrapped {...props} swapiService={swapiService}/>
                    )
                }
            }
        </ServiceConsumer>
        );
    }
}

export default withService;