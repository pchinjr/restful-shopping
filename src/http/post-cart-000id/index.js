// learn more about HTTP functions here: https://arc.codes/primitives/http

let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = async function http (req) {
  

  let order = data.set({
    table: carts,
    key:
  })

  let body = arc.http.helpers.bodyParser(req)
  console.log(body)
  return {
    statusCode: 201,
    body: JSON.stringify(body)
  }
}