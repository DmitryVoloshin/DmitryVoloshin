import React from 'react';
import ItemList from '../item-list';
import { withData,withService } from '../HOC';


const withChildFunction =  (fn )=> ( Wrapped ) =>{
    return ( props ) =>{
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};


const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({model,name}) => <span>{name}({model})</span>


const mapPersonMethodsToProps = ( swapiService ) =>{
    return{
        getData:swapiService.getAllPeople
    }
}
const mapStarshipMethodsToProps = ( swapiService ) =>{
    return{
        getData:swapiService.getAllStarships
    }
}
const mapPlanetMethodsToProps = ( swapiService ) =>{
    return{
        getData:swapiService.getAllPlanets
    }
}

const PersonList = withService(mapPersonMethodsToProps)(
                        withData(
                            withChildFunction(renderName)(ItemList,)));

const StarshipList = withService(mapStarshipMethodsToProps)(
                    withData(
                            withChildFunction(renderModelAndName)(ItemList)));


const PlanetList = withService(mapPlanetMethodsToProps)(
                        withData(
                            withChildFunction(renderName)(ItemList,)));


export {
    PersonList,
    StarshipList,
    PlanetList
}