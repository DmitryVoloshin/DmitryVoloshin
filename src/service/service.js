fetch('https://swapi.dev/api/people/1/')
    .then((res)=>{
        console.log('got Response', res.status)
    })