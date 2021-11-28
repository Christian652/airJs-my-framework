export default interface IConnection {


  user: string;
  host: string;
  database: string;
  port?: number;
  password?: string;

  getInstance();

}