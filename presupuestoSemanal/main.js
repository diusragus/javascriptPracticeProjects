//if (initialBudget === null || initialBudget ===) {
//    initialBudget = prompt('Por favor, ingresa un presupuesto','')
//} 
let initialBudget = prompt('Por favor, ingresa tu presupuesto semanal', '');

class Budget{
    constructor(initialBudget){
        this.initialBugdet=initialBudget;        
    }; 
    
    remainingBudget = function(initialBudget,expend){
        this.initialBudget = (parseInt(initialBudget) - parseInt(expend)).toString();
    }

    getInitialBudget = function(){
        return initialBudget;
    }

    setInitialBudget = function(newBudget){
        this.initialBudget = newBudget;
    }
}


const budgetOne = new Budget(initialBudget);

let initialBudgetInfo = document.getElementById('initial-budget');
initialBudgetInfo.innerHTML=initialBudget;

let remainingBudgetInfo = document.getElementById('remaining-budget');
//remainingBudgetInfo.innerHTML=remainingBudget;


const addButton = document.getElementById('add-button');
addButton.addEventListener('click',function(e){

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

    expendName.value='';
    expendCost.value='';

    budgetOne.remainingBudget(initialBudget,expendCostValue);
    let remainingBudget = budgetOne.initialBugdet;
    remainingBudgetInfo.innerHTML=remainingBudget;
})









//console.log(budgetOne);

//budgetOne.initialBugdet=budgetOne.remainingBudget(initialBudget,'500');





//class Interace{}


