import BaseModule from "../Common/BaseModule";

export default class ProductModule extends BaseModule {
  constructor({
    controller,
    service,
    model,
    repository,
    connection
  }) {
    super({
      controller,
      service,
      model,
      repository,
      connection
    });
  }

}