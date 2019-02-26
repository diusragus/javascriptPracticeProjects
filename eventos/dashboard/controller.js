class Controller{
    constructor(){
        this.loadSelectOptions();
        this.showEvents();
    }    

    loadSelectOptions() {
        service.loadCategories()
            .then(categories => {
                const categoriesList = categories.categories.categories;
                const select = document.getElementById('listado-categorias');
                //console.log(categoriesList);

                categoriesList.forEach(categorie => {
                    const option = document.createElement('option');
                    option.innerHTML = categorie.name;
                    option.setAttribute('value',categorie.id);
                    select.appendChild(option);
                });
            })           
    }

    showEvents() {
        const searchBtn = document.getElementById('buscarBtn')

        searchBtn.addEventListener('click',(e) => {
            e.preventDefault();
            let searchInput = document.getElementById('evento').value;
            let categoriesSelect = document.getElementById('listado-categorias');
            let categoryOption = categoriesSelect.options[categoriesSelect.selectedIndex].value;
            
            
            if (searchInput === '' || categoryOption === '') {
                alert('Debes completar todos los campos')
            } else {
                service.searchEvents(searchInput,categoryOption)
                    .then(events => {
                        const eventList = events.events.events;
                        const resultDiv = document.getElementById('resultado-eventos');
                        

                        eventList.forEach(event => {
                            console.log(event);
                            let card = document.createElement('div');
                            let cardImage = document.createElement('img');
                            let cardTitle = document.createElement('h5');
                            let cardText = document.createElement('p');
                            let cardButton = document.createElement('a');

                            card.setAttribute('class','events');
                            cardImage.setAttribute('class','card-image');
                            cardTitle.setAttribute('class','card-title');
                            cardButton.setAttribute('class','card-button');

                            cardImage.setAttribute('src',event.logo.url)
                            cardTitle.innerHTML = event.name.html;
                            //cardText.innerHTML = event.description.html;
                            cardButton.setAttribute('href',event.url);
                            cardButton.setAttribute('target','blanck');
                            cardButton.innerHTML='Comprar Ticket'


                            card.appendChild(cardImage);
                            card.appendChild(cardTitle);
                            //card.appendChild(cardText);
                            card.appendChild(cardButton);

                            resultDiv.appendChild(card);
                        });                    
                        

                    })
                
            }
        
        
        })

        

        //let categoryName = categoryOption[categoriesSelect.selectedIndex];
        
        
    }







}


    //console.log(categoriesArray); 



    //categoriesArray.forEach(category => {
    //    let option = document.createElement('option');
    //    console.log(category.name);
    //    option.innerHTML=category.name;
    //      option.setAttribute('id',category.id);
    
    //});






