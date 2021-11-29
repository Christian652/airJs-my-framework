import bootstrap from "./database/bootstrap";
import ProductsController from "./modules/Products/Products.controller";
import ProductsService from "./modules/Products/Products.service";
import ProductModule from "./modules/Products/Product.module";
import Product from "./modules/Products/Product.model";
import ProductsRepository from "./modules/Products/Products.repository";
import Http from "./core/http/Http";

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

  const http = new Http();

  http.get("/", (req, res) => {
    res.end("Bem Vindo")
  })

  http.post("/", (req, res) => {
    res.end("Bem Vindo no post")
  })

  http.put("/", (req, res) => {
    res.end("Bem Vindo no put")
  })

  http.patch("/", (req, res) => {
    res.end("Bem Vindo no patch")
  })

  http.delete("/", (req, res) => {
    res.end("Bem Vindo no delete")
  })
  
  http.listen(8000);

}
main();
