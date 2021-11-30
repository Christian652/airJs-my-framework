import IException from "../interfaces/IException";

export default class HttpException implements IException {
  constructor (
    public message: string,
    public code: number
  ) {}
}