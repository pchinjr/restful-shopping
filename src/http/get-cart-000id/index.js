// learn more about HTTP functions here: https://arc.codes/primitives/http
let data = require('@begin/data')

exports.handler = async function http (req) {
  let key = req.pathParameters.id

  let cart = await data.get({
    table: 'carts',
    key
  })

  if(!cart) {
    return {
      statusCode: 404,
      body: 'Cart not found'
    }
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(cart)
  }
}