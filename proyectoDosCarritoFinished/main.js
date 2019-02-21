const cardsArray = [{cardTitle: 'Bootstrap Course', cardText:'I am a bootstrap course'},{cardTitle: 'HTML course',cardText:'I am a HTML course'}, {cardTitle:'CSS Course',cardText:'I am a CSS course'},{cardTitle:'JavaScript Course',cardText:'I am a javascript course'}];

//COURSES-LOADING
let loadCourses = function() {
    cardsArray.forEach(element => {
        let cardList = document.getElementsByTagName('ul')[0];
        let newCard = document.createElement('li');
        let newCardDiv = document.createElement('div');
        let newCardImage = document.createElement('div');
        let newCardContent = document.createElement('div');
        let newCardCardTitle = document.createElement('div');
        let newCardText = document.createElement('p');
        let newCardButton = document.createElement('button');
        
        newCard.classList='cards-item';
        newCardDiv.classList='card';
        newCardImage.classList='card-image';
        newCardContent.classList='card-content';
        newCardCardTitle.classList='card-title';
        newCardCardTitle.innerHTML=element.cardTitle;
        newCardText.classList='card-text';
        newCardText.innerHTML=element.cardText;
        newCardButton.classList='card-button';
        newCardButton.innerHTML='Add To Cart';

        newCard.appendChild(newCardDiv);
        newCardDiv.appendChild(newCardImage);
        newCardDiv.appendChild(newCardContent);
        newCardContent.appendChild(newCardCardTitle);
        newCardContent.appendChild(newCardText);
        newCardContent.appendChild(newCardButton);
        cardList.appendChild(newCard);
    });

    loadCart();
};

//CART-LOADING
let loadCart = function() {
    if (localStorage.length!=0) {
        
        let cartCollection = JSON.parse(localStorage.getItem('cart', (cart)));
        let cartArray=Array.from(cartCollection);    
        let i = 0;
        
        cartArray.forEach(element => {

            let cartList = document.getElementsByTagName('ul')[1];
            let newCartElement = document.createElement('li');
            let newCartImage = document.createElement('div');
            let newCartTitle = document.createElement('div');
            let newDeleteButton = document.createElement('button');
            let cartCollection = cartList.children;
            let length = cartCollection.length; //usando el lenght de la html collection se cuantos elementos tiene, y puedo asignarle el id correspondiente al nuevo elemento html que estoy creando, asi se si por jemeplo hay 3 elementos en el card, el nuevo id(indice) va a ser 3 y va a haber 4 elementos (recordar que el arreglo arranca en 0)
                    
            newCartElement.classList='cart-item';
            newCartImage.classList='cart-image';
            newCartTitle.classList='cart-element-title';
            newCartTitle.innerHTML=cartArray[i].cardTitle;
            newDeleteButton.classList='delete-element-button';
            newDeleteButton.innerHTML='X';

            newCartElement.setAttribute('id',length); //les setie un atributo para luego poder encontrarlos y compararlos con el index del arreglo del local storage
        
            newCartElement.appendChild(newCartImage);
            newCartElement.appendChild(newCartTitle);
            newCartElement.appendChild(newDeleteButton);
            cartList.appendChild(newCartElement);
    
            i++;
        
        });
    }; 
}; 

//EVENTS
//cards event listener
let courses = document.getElementsByClassName('cards-div')[0];
courses.addEventListener('click', function(e){
    
    if (e.target.classList.contains('card-button')) {
        
        let target = e.target;
        let father = target.parentElement;
        let innerElements = father.children;
        let cardTitle = innerElements[0].innerHTML; //obtengo el titulo de la card para poder luego setearlo
        
        createAndAddCartElement(cardTitle);
        cartObject = createCartObject(cardTitle);
        saveOnLocalStorage(cartObject);
    }
})

//delete element event listener
let kart = document.getElementsByClassName('cart-list')[0];
kart.addEventListener('click',function(e){

    if(e.target.classList.contains('delete-element-button')){
                        
        let target = e.target;
        console.log(target);
        let father = target.parentElement;
        let fatherIndex = father.getAttribute('id'); //obtengo el id del li que le setie al crearlo para luego poder compararlo con el index del loal storage
        
        let kartArray = obtainLocalStorage();
        kartArray.splice(fatherIndex,1);
        localStorage.setItem('cart', JSON.stringify(kartArray));
        clearCart();
        loadCart();
        //location.reload(); //hago un reload de la pagina para que me actualice los id's, sino quedan desfasados y no me elimina el que apunto
        deleteCartElement(e); 
        
    }
})

//cart clearing event listener
let clearButton = document.getElementsByClassName('clear-button')[0];
clearButton.addEventListener('click',function(e){

    if(e.target.classList.contains('clear-button')){
        localStorage.clear();
        //location.reload(); renderizar la pagina de nuevo
        clearCart();
    }
})

///////////////////////////////////////////////////////////////////// FUNCTIONS

//DOM MANIPULATION
const createAndAddCartElement = function(cardTitle){

    let cartList = document.getElementsByTagName('ul')[1];
    let cartCollection = cartList.children;
    let length = cartCollection.length; //usando el lenght de la html collection se cuantos elementos tiene, y puedo asignarle el id correspondiente al nuevo elemento html que estoy creando, asi se si por jemeplo hay 3 elementos en el card, el nuevo id(indice) va a ser 3 y va a haber 4 elementos (recordar que el arreglo arranca en 0)
    
    let newCartElement = document.createElement('li');
    let newCartImage = document.createElement('div');
    let newCartTitle = document.createElement('div');
    let newDeleteButton = document.createElement('button');

    newCartElement.setAttribute('id',length); //les setie un atributo para luego poder encontrarlos y compararlos con el index del arreglo del local storage
        
    newCartElement.classList='cart-item';
    newCartImage.classList='cart-image';
    newCartTitle.classList='cart-element-title';
    newCartTitle.innerHTML=cardTitle;
    newDeleteButton.classList='delete-element-button';
    newDeleteButton.innerHTML='X';

    newCartElement.appendChild(newCartImage);
    newCartElement.appendChild(newCartTitle);
    newCartElement.appendChild(newDeleteButton);
    cartList.appendChild(newCartElement);
        
};

const createCartObject = function(cardTitle){

    let cartObject = {cardTitle:cardTitle};
    return cartObject;

}

const deleteCartElement = function(e){
    let target = e.target;
    let father = target.parentElement;
    father.remove();
    
};

const clearCart = function(){

    let i = 0;
    let cartList = document.getElementsByTagName('ul')[1];
    let cartItems = cartList.children;
    let cartItemsArray = Array.from(cartItems);
    let length = cartItemsArray.length;

    for (i = 0; i < length; i++) {
        cartItems[0].remove(); 
    };
};

// LOCALSTORAGE MANIPULATION
const saveOnLocalStorage = function(e){

    let cart = [];

    if (localStorage.length===0) {
            cart.push(e);
            localStorage.setItem('cart', JSON.stringify(cart));
        
    } else {
            cart = JSON.parse(localStorage.getItem('cart', (cart)));
            cart.push(e);
            localStorage.setItem('cart', JSON.stringify(cart));
    }
};

const obtainLocalStorage = function(){

    cartArray = JSON.parse(localStorage.getItem('cart', (cart)));

    return cartArray;
    
};

const deleteElementLocalStorage = function(){};





