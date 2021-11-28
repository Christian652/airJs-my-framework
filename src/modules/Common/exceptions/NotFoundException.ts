import HttpException from "./HttpException";

export default class NotFoundException extends HttpException {
  constructor () {
    super("Not Found", 404)
  }
}