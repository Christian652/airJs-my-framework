import Http from "./core/http/Http";

const routes = new Http();
// To Implement : algoritm that imports all route.ts files and export all endpoints
// in a single Http instance or just in a array
routes.get("/products", (req, res) => {
  res.end("Bem Vindo do arquivo de rotas")
})

routes.post("/products", (req, res) => {
  res.end("Bem Vindo do arquivo de rotas no post")
})

routes.put("/products", (req, res) => {
  res.end("Bem Vindo do arquivo de rotas no put")
})

routes.patch("/products", (req, res) => {
  res.end("Bem Vindo do arquivo de rotas no patch")
})

routes.delete("/products", (req, res) => {
  res.end("Bem Vindo do arquivo de rotas no delete")
})

export default routes;