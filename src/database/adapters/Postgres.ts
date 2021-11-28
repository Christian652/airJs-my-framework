import BaseConnection from "./BaseConnection";

export default class Postgres extends BaseConnection {
  private client = null;
  
  constructor(
    public user: string,
    public host: string,
    public database: string,
    public port?: number,
    public password?: string,
  ) {
    super(user, host, database, port, password);

    this.lib = require('pg');
  }

  protected async setInstance() {
    const { host, user, database, password, port } = this;
    const { Client } = this.lib;

    this.instance = new Client({
      user,
      host,
      database,
      password,
      port,
    })
    await this.instance.connect();
  }
}