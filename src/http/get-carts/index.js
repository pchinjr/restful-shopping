// learn more about HTTP functions here: https://arc.codes/primitives/http
let data = require('@begin/data')

exports.handler = async function http (req) {

  let carts = await data.get({
    table: 'carts',
  })

  return {
    statusCode: 200,
    body: JSON.stringify(carts) || `..getting all carts`
  }
}