//if (initialBudget === null || initialBudget ===) {
//    initialBudget = prompt('Por favor, ingresa un presupuesto','')
//} 
let initialBudget = prompt('Por favor, ingresa tu presupuesto semanal', '');

class Budget{
    constructor(initialBudget){
        this.initialBugdet=initialBudget;
        this.remainingBudget=initialBudget;      
    }; 

    getInitialBudget = function(){
        return initialBudget;
    }    
    setInitialBudget = function(newBudget){
        this.initialBudget = newBudget;
    }
    getRemainingBudget = function(){
        return remainingBudget;
    }
    setRemainingBudget = function(remainingBudget,expend){
        this.remainingBudget = (parseInt(remainingBudget) - parseInt(expend)).toString();
    }
}

const budgetOne = new Budget(initialBudget);
const form = document.getElementsByTagName('form')[0];
const addButton = document.getElementById('add-button');

let initialBudgetInfo = document.getElementById('initial-budget');
initialBudgetInfo.innerHTML=initialBudget;
let remainingBudgetInfo = document.getElementById('remaining-budget');

form.addEventListener('change', function(e){
    e.preventDefault();
    let validData = messageValidation();
    let validAmmount = ammountValidation();
            
    if ( validData && validAmmount===true) {
        addButton.removeAttribute('disabled');
        addButton.setAttribute('class','add-button')
    } else {
        addButton.setAttribute('disabled', 'disabled');
        addButton.setAttribute('class','add-button-disabled')
    }
})

addButton.addEventListener('click',function(e){
    
    //creo los elementos en el dom con los valores ingresados
    e.preventDefault();
    let expendName = document.getElementById('input-data');
    let expendCost = document.getElementById('input-number');
    let expendNameValue = expendName.value;
    let expendCostValue = expendCost.value;    

    let expendList = document.getElementById('list');
    let newExpendElement = document.createElement('li');
    let newExpendElementValue = document.createElement('button');

    newExpendElement.innerHTML = expendNameValue;
    newExpendElement.className ='list';
    newExpendElementValue.className ='li-button';
    newExpendElementValue.innerHTML = expendCostValue;
    expendList.appendChild(newExpendElement);
    newExpendElement.appendChild(newExpendElementValue);

    //limpio el form una vez clickeado el boton
    expendName.value='';
    expendCost.value='';

    //seteo el nuevo presupuesto a partir del valor del nuevo dato
    budgetOne.setRemainingBudget(budgetOne.remainingBudget,expendCostValue);
    remainingBudgetInfo.innerHTML=budgetOne.remainingBudget;

    //cambio la clase de remainingBudgetInfo segun su valor
    if (parseInt(remainingBudgetInfo.innerHTML) < parseInt(budgetOne.initialBugdet)/4) {
        remainingBudgetInfo.setAttribute('class','remaining-budget-few');      
    } else if (parseInt(remainingBudgetInfo.innerHTML) < parseInt(budgetOne.initialBugdet)/2){  
        remainingBudgetInfo.setAttribute('class','remaining-budget-middle');
    };
})

const messageValidation = function() {
    let input = document.getElementById('input-data');
    let data = input.value.length;

    return data;
};

const ammountValidation = function() {
    let input = document.getElementById('input-number');
    let dataValue;
   
    if (input.value.length && isNaN(input.value)===false ) {
        dataValue = true;
    } else {
        dataValue = false;
    }

    return dataValue;
};


