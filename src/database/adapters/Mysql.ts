import BaseConnection from "./BaseConnection";

export default class Mysql extends BaseConnection {
  constructor(
    public user: string,
    public host: string,
    public database: string,
    public port?: number,
    public password?: string,
  ) {
    super(user, host, database, port, password );

    this.lib = require('mysql2/promise');
  }

  protected async setInstance() {
    const { host, user, database, password } = this;

    this.instance = await this.lib.createConnection({
      host,
      user,
      database,
      password
    });
  }
}