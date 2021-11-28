import IConnection from './interfaces/IConnection';

export default class BaseConnection implements IConnection {
  public lib: any;
  protected instance = null;
  
  constructor (
    public user: string,
    public host: string,
    public database: string,
    public port?: number,
    public password?: string,
  ) {}

  public async getInstance() {
    if (!this.instance) await this.setInstance();

    return this.instance;
  }

  protected async setInstance() {}
}