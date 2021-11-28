import HttpException from "./HttpException";

export default class ForbiddenException extends HttpException {
  constructor () {
    super("Forbidden", 403)
  }
}