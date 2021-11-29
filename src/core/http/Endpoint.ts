import IEndpoint from "./interfaces/IEndpoint";
import { Method } from "./enums/methods.enum";

export default class Endpoint implements IEndpoint {
  // To Implement
  public params;
  public query;

  constructor (
    public path: string,
    public method: Method,
    public callback: (req, res) => any
  ) {}
}