export default function initFetchBitcoin() {
  const urlHC = 'https://blockchain.info/ticker';

  async function fetchBitcoin(url) {
    try {
      const responseBitcoin = await fetch(url);
      const responseBitcoinJson = await responseBitcoin.json();

      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / responseBitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin(urlHC);
}
