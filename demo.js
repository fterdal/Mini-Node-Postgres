console.clear()
const { Client } = require('pg')
const client = new Client({
  connectionString: 'postgres://localhost/MiniNodePostgres'
})

const connect = async () => {
  try {
    await client.connect()
    await client.query(`DROP TABLE IF EXISTS users`)
    // console.log(await client.query('SELECT NOW()'))
    console.log(await client.query(`
      CREATE TABLE users (
        id int,
        email varchar(255)
      )
    `))
  } catch (err) {
    console.error(err)
  }
}
connect()
