import bootstrap from "./database/bootstrap";
import ProductsController from "./modules/Products/Products.controller";
import ProductsService from "./modules/Products/Products.service";
import ProductModule from "./modules/Products/Product.module";
import Product from "./modules/Products/Product.model";
import ProductsRepository from "./modules/Products/Products.repository";

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
  
}
main();
