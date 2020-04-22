import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';




//Клас для инкапсуляции сетевого кода
class SwapiService{

    _apiBase = 'https://swapi.dev/api'
 
    async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok){
        throw new Error(`its not fetch trouble`)
    }
    return await res.json()  
   }

    async getAllPeople(){
      const res = await this.getResource(`/people/`);
      return res.results;
   }
   getPerson(id){
       return this.getResource(`/people/${id}/`)
   }

}

const swapi = new SwapiService();
swapi.getAllPeople().then((people)=> 
    console.log(people.forEach((p)=>{
        console.log(p.name)
    })))

  









ReactDOM.render(<App/>,
    document.getElementById('root'))

