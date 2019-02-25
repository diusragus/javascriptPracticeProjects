const quotationBtn = document.getElementById('submit-btn');

let fiat = document.getElementById('fiat').value;
let cripto = document.getElementById('cripto').value;


class Quotation {
    constructor(fiat,cripto) {
        this.fiat = fiat;
        this.cripto = cripto;        
    }

    doQuotation = (fiat,criptoName) => {
                        
    }
        
}

class Interface {
    constructor(){}

    showSpinner = () => {
        let spinner = document.getElementById('spinner');
        spinner.setAttribute('class','spinner');
    }

    unshowSpinner = () => {
        let spinner = document.getElementById('spinner');
        spinner.removeAttribute('class');
    }  

    showInfoDiv = () => {
        let infoDiv = document.getElementById('info-div');
        infoDiv.setAttribute('class','info-div');
    }

    unshowInfoDiv = () => {
        let infoDiv = document.getElementById('info-div');
        infoDiv.removeAttribute('class');
    }

    loadRestCriptoNames = () => {
        const url = 'https://api.coinmarketcap.com/v1/ticker/';   

        fetch(url)
            .then(data=>{return data.json()})
            .then(res=>{
                    res.forEach(coin => {
                    let coinOption = document.createElement('option');
                    coinOption.innerHTML=(coin.name);
                    document.getElementById('cripto').appendChild(coinOption);
                });
            })
           .catch(error=>{console.log(error)})        
    }

    doQuotation = () => {
        const quotationEvent = () => quotationBtn.addEventListener('click',function(e){
            e.preventDefault();
            
            let coinId=document.getElementById('cripto').children[selectedIndex.value];
            const url = `https://api.coinmarketcap.com/v1/ticker/${coinId}/?convert=USD`;   
    
            fetch(url)
                .then(data=>{return data.json()})
                .then(res=>{
                    
                })
                .catch(error=>{console.log(error)})  
    
                    
            
        })
    }

        
     
}
const interface = new Interface();

interface.loadRestCriptoNames();
interface.doQuotation();
