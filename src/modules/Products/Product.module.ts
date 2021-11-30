import BaseModule from "../../core/common/BaseModule";

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