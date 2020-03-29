

// Инкапсуляция и изолирование всего сетевого кода от остальных частей приложухи
class SwapiService{

  _apiMain = 'https://swapi.co/api'

    async getResource(url){
      const res = await fetch(`${this._apiMain}${url}`);

      if(!res.ok){
        throw new Error(url)
      }
     
      return await res.json();

    }
    async getAllPeople(){
      const res = await this.getResource(`/people/`);
      return res.results;
    }
    getPerson(id){
      return this.getResource(`/people/${id}`)
    }
}


const swapi = new SwapiService();


swapi.getAllPeople().then( (people)=>{ 
  people.forEach((p)=>{
    console.log(p.name)
  })
});



