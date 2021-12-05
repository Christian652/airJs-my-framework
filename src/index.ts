import bootstrap from "./database/bootstrap";
import ProductsController from "./modules/Products/Products.controller";
import ProductsService from "./modules/Products/Products.service";
import ProductModule from "./modules/Products/Product.module";
import Product from "./modules/Products/Product.model";
import ProductsRepository from "./modules/Products/Products.repository";
import Http from "./core/http/Http";
import routes from "./routes";

async function main() {
  const dotenv = require("dotenv");
  dotenv.config();
  const connection = bootstrap();

  const productModule = new ProductModule({
    controller: ProductsController,
    service: ProductsService,
    model: Product,
    connection,
    repository: ProductsRepository
  });
  // To Do: add pipe layer to validate requests send validated data to controllers
  // return error and validation messages and controller content returned 
  const http = new Http();
  http.get("/", (req, res) => {
    res.end("Welcome to AIR.js")
  })
  http.importEndpoints(routes.endpoints);
  
  http.listen(process.env.APP_PORT || 3000);
}
main();
