// Entry point to server
const app = require('./server/app')
const client = require('./server/db/client')
const PORT = 8080

client.connect()
app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`)
})