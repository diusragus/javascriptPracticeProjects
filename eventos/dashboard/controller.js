class Controller{
    constructor(){}    
}

loadSelectOptions = () => {
    const categoriesArray = loadCategories();
    //console.log(categoriesArray); 

    let select = document.getElementById('listado-categorias');

    //categoriesArray.forEach(category => {
    //    let option = document.createElement('option');
    //    console.log(category.name);
    //    option.innerHTML=category.name;
    //      option.setAttribute('id',category.id);
    
    //});
}

const controller = new Controller();

loadSelectOptions();

