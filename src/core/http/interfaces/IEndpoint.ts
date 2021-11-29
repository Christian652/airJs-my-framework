import { Method } from "../enums/methods.enum";

export default interface IEndpoint {
  path: string,
  method: Method,
  params: any[],
  query: any[],
  callback: (req, res) => any
}