import { DatabaseClient } from '../database'

export class SettingsRepository {
  private client: DatabaseClient

  constructor(client: DatabaseClient) {
    this.client = client
  }

  async save(user: string, project: string) {
    const conn = this.client.getConnection()

    return new Promise(function (resolve, reject) {
      conn.serialize(function() {
        const stmt = conn.prepare(`INSERT INTO settings (user, project) VALUES (?, ?)`)
        stmt.run([user, project])
        stmt.finalize()

        resolve({ user, project })
      })
    })
  }

  async get(): Promise<any[]> {
    const conn = this.client.getConnection()
    const query = 'SELECT * from settings'

    return new Promise(function (resolve, reject) {
      conn.all(query, function (error: Error, rows: any[]) {
        if (error)
          reject(error)
        else
          resolve(rows)
      })
    })
  }
}
