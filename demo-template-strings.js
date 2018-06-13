console.clear()
const { Client } = require('pg')
const sql = require('sql-template-strings')
const client = new Client({
  connectionString: 'postgres://localhost/MiniNodePostgres'
})

const connect = async () => {
  try {
    await client.connect()
    await client.query(sql`DROP TABLE IF EXISTS users`)
    console.log(await client.query(sql`SELECT NOW()`))
    console.log(await client.query(sql`
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
