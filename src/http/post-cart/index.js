// learn more about HTTP functions here: https://arc.codes/primitives/http
let data = require('@begin/data')

exports.handler = async function http (req) {

  let cart = await data.set({
    table: 'carts'
  })

  return {
    statusCode: 201,
    body: JSON.stringify(`cart created key: ${cart.key}`)
  }
}