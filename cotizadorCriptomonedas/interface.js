class Interface {
    constructor(){
        this.init();
    }

    init(){
        this.unshowSpinner();
        this.unshowInfoDiv();
        this.loadSelect();
        this.submitForm();
    }

    loadSelect() {
        quotation.obtainCoinList()
            .then(criptoCoins => {
                console.log(criptoCoins);
                const coinList = criptoCoins.criptoCoins;
                const select = document.getElementById('cripto');    

                coinList.forEach(coin => {
                    const option = document.createElement('option');
                    option.innerHTML = coin.name;
                    option.setAttribute('value',coin.id)
                    select.appendChild(option);                    
                })                         
            })
            .catch(error => {console.log(error)})
    }

    showSpinner() {
        let spinner = document.getElementById('spinner');
        spinner.setAttribute('class','spinner');
    }

    unshowSpinner() {
        let spinner = document.getElementById('spinner');
        spinner.removeAttribute('class');
    }  

    showInfoDiv() {
        let infoDiv = document.getElementById('info-div');
        infoDiv.setAttribute('class','info-div');
    }

    unshowInfoDiv() {
        let infoDiv = document.getElementById('info-div');
        infoDiv.removeAttribute('class');
    }

    submitForm() {
        let form = document.getElementById('form')

        form.addEventListener('submit', (e) => {
            
            e.preventDefault();            
            let fiatCoinSelect = document.getElementById('fiat');
            let selectedFiatCoin = fiatCoinSelect.options[fiatCoinSelect.selectedIndex].value;              
            let criptoCoinSelect = document.getElementById('cripto');
            let selectedCriptoCoin = criptoCoinSelect.options[criptoCoinSelect.selectedIndex].value;
            
            if (selectedFiatCoin === '' || selectedCriptoCoin === ''){
                alert('Ambos campos son obligatorios');
            }else {
                ui.showSpinner();
                setTimeout(() => {
                    ui.unshowSpinner();
                    quotation.doQuotation(selectedFiatCoin,selectedCriptoCoin)
                        .then(quotationRes =>{                            
                            let quotation = quotationRes.quotationRes[0]
                            let infoData = document.getElementById('info-data');                         
                            let fiatCoinParameter = `price_${selectedFiatCoin.toLowerCase()}`                       
                            let value = quotation[fiatCoinParameter];
                            
                            infoData.innerHTML = `
                            <p>${quotation.symbol}</p>
                            <p>Moneda: ${quotation.id}</p>
                            <p>Available Supply: ${quotation.available_supply}</p>
                            <p>Market Cap: ${quotation.market_cap_usd}</p>
                            <p>Available Supply: ${quotation.available_supply}</p>
                            <p>Ranking: ${quotation.rank}</p>
                            <p>Precio en ${selectedFiatCoin}: ${value}</p>
                            <p>Precio BTC: ${quotation.price_btc}</p>
                            <p>Available Supply: ${quotation.available_supply}</p>
                            `
                         })

                    ui.showInfoDiv();
                }, 500);               
            }        
        })
    }    
}