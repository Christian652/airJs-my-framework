import Endpoint from "./Endpoint";
import { Method } from "./enums/methods.enum";

export default class Http {
  protected server;
  protected http = require("http");
  public endpoints: Endpoint[] = [];

  private endpointFactory(method, path, callback) {
    this.endpoints.push(new Endpoint(path, method, callback));
  }

  importEndpoints(endpoints: Endpoint[]) {
    endpoints.forEach(endpoint => {
      this.endpoints.push(endpoint);
    })
  }

  get(path, callback) {
    this.endpointFactory(Method.GET, path, callback)
  }

  post(path, callback) {
    this.endpointFactory(Method.POST, path, callback)
  }

  put(path, callback) {
    this.endpointFactory(Method.PUT, path, callback)
  }

  patch(path, callback) {
    this.endpointFactory(Method.PATCH, path, callback)
  }

  delete(path, callback) {
    this.endpointFactory(Method.DELETE, path, callback)
  }

  listen(port) {
    // To Refacturing , have more than should be responsable 
    this.server = this.http.createServer((req, res) => {
      const foundedEndpoint = this.endpoints.find(endpoint => {
        if (
          endpoint.path.toUpperCase() == req.url.toUpperCase() &&
          endpoint.method.toUpperCase() == req.method.toUpperCase()
        ) {
          return endpoint;
        }
      })
      
      if (foundedEndpoint) {
        foundedEndpoint.callback(req, res);
      } else {
        res.end("endpoint não encontrado")
      }
    });

    this.server.listen(port, () => console.log(`Server Started at ${port} Port!`));
  }
}