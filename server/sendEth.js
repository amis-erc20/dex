
const config = require('./config')
const api = require('./api')

const mainAsync = async () => {

  const tx = {
    to: '0xA7722A9f1FeD3E2f9f394D6b735f5D3B69F45D2e',
    value: 1,
    gas: 21000
  }

  const result = await api.sendTx(tx)

  console.log('result: ', result)
}


mainAsync().catch(console.error)
