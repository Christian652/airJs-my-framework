export default abstract class BaseModule {
  public service = null;
  public controller = null;
  public model = null;
  private connection = null;
  public repository = null;

  constructor({
    controller,
    service,
    model,
    repository,
    connection
  }) {
    this.connection = connection;
    this.model = new model(this.connection);
    this.repository = new repository(this.model);
    this.service = new service(this.repository);
    this.controller = new controller(this.service);
  }

}