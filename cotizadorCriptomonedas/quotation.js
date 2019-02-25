class Quotation {
    constructor() {
        this.obtainCoinList();
    }

    async obtainCoinList() {
        const url = 'https://api.coinmarketcap.com/v1/ticker/'

        const coinList = await fetch(url);
        const criptoCoins = await coinList.json();

        return {
            criptoCoins
        }
    } 

    async doQuotation(fiat,cripto){
        const url = `https://api.coinmarketcap.com/v1/ticker/${cripto}/?convert=${fiat}`

        const quotation = await fetch(url);
        const quotationRes = await quotation.json();

        return {
            quotationRes
        }
    }
}