@app
begin-app

@http


get /
get /carts
get /products
get /cart/:id

post /cart
post /cart/:id


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
