// learn more about HTTP functions here: https://arc.codes/primitives/http
let data = require('@begin/data')

exports.handler = async function http (req) {
  let products = await data.get({table: "products"})
  return {
    body: products ||`...getting products`
  }
}