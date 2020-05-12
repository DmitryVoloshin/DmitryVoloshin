import React from 'react';
import ItemList from '../item-list';
import { withData,withService } from '../HOC';


const withChildFunction = ( Wrapped, fn) =>{
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

const PersonList = withService(
                        withData(
                            withChildFunction(ItemList,renderName)),
                                mapPersonMethodsToProps);

const StarshipList = withService(
                    withData(
                            withChildFunction(ItemList,renderModelAndName)),
                                mapStarshipMethodsToProps);


const PlanetList = withService(
                        withData(
                            withChildFunction(ItemList,renderName)),
                                mapPlanetMethodsToProps);


export {
    PersonList,
    StarshipList,
    PlanetList
}