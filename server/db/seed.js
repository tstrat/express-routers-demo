const client = require('./client')


async function seed() {
  try {
    client.connect()

  } catch(err) {
    console.error(err)
  } finally {
    client.end() // closes the connection
  }
}

seed()