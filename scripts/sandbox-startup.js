let data = require('@begin/data')

async function startUpScript() {
  let table='products'

  let products = [
    { table, key: '001', name: 'pillow', price: '2500' },
    { table, key: '002', name: 'candle', price: '2500' },
    { table, key: '003', name: 'blanket', price: '2500' }
  ]

  await data.set(products)
}

module.exports = startUpScript