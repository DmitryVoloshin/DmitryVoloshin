import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';



const getResource = async ( url ) =>{
    const res = await fetch( url );
    const body = await res.json();
    return body;
};

getResource('https://swapi.dev/api/people/1/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log(err)
    });









ReactDOM.render(<App/>,
    document.getElementById('root'))

