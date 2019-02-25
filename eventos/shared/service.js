class Service {

    constructor(){

    };
    
}

const token = `PLOV22NOECD5KXFVCNYE`;

async function loadCategories(){
    const url = `https://www.eventbriteapi.com/v3/categories/?token=${token}`

    await fetch(url)
        .then(data=>{return data.json()})
        .then(res=>{
            asignFetchRes(res);
        })
        .catch(error=>{console.log(error)})
    ;
}

async function searchEvents(input,category){    
    const url = `https://www.eventbriteapi.com/v3/events/search/?q=${input}&sort_by=date&categories=${category}&token=${token}`

    await fetch(url)
        .then(data=>{return data.json()})
        .then(res=>{
                return res;
            })
        .catch(error=>{console.log(error)})                    
}

const asignFetchRes = function(res){
    let categories = res;
    console.log(categories);
    return categories;
}

let categories = loadCategories();
console.log(categories);
//searchEvents('rock','103');
//const categories = asignRes();

//I have a blocker. I cannot get the fetch response,