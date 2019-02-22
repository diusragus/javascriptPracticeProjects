let fiat = document.getElementById('fiat').value;
let cripto = document.getElementById('cripto').value;

/*
value 1 = 
value 2 =
value 3 =
value 4 =
*/


class Quotation {
    constructor(fiat,cripto) {
        this.fiat = fiat;
        this.cripto = cripto;        
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
}