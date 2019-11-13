const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port !`))
app.get('/product', (request, response) => {
    const connection = connect()
    const statement = `select * from Product`
    connection.query(statement, (error, products) => {
        connection.end()
        response.send(products)
    })