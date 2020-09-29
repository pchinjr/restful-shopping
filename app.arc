@app
begin-app

@http
get /
get /carts
post /cart
get /products
get /cart/:id


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
