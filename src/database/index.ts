const sqlite3 = require('sqlite3').verbose()

export class DatabaseClient {
  private connection: any

  constructor() {
    this.connection = new sqlite3.Database('settings')
  }

  setup() {
    const conn = this.connection
    conn.serialize(function() {
      conn.run("CREATE TABLE IF NOT EXISTS settings (user TEXT, project)")
      console.log('TABLE created')
    })
  }

  getConnection() {
    return this.connection
  }

  close() {
    this.getConnection().close()
  }
}
