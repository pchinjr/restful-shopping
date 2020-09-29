<img src="https://static.begin.app/node-hello-world/readme-banner.png" width="813">

[![Begin build status](https://buildstatus.begin.app/pizza-0uw/status.svg)](https://begin.com)

## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-hello-world)

Deploy your own clone of this app to Begin!

## Getting started

- Start the local dev server: `npm start`
- Lint your code: `npm run lint`
- Run your tests: `npm t`

## Reference

- [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
- [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!

POST /cart/:id/checkout - authenticate checkout
GET /products list products
POST /products add new product { name: "pillow", price: "2500", id: "xxxxx"}
POST /cart/:id add product to cart


User sees a list of products they can buy. Clicking on the item adds it to a cart, a session is created so they can come back to the cart without logging in. In order to get to checkout, they will have to login. At checkout they can see the items in their cart.


started with get all products page
set up sandbox script to pre-populate some products
create a new cart and get ID
search for all carts
get single cart by id

[] put things in cart
