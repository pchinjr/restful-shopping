@app
begin-app

@http
get /
post /cart/:id
get /products
get /cart/:id


@tables
data
  scopeID *String
  dataID **String
  ttl TTL
