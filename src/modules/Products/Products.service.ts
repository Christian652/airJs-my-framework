import Product from "./Product.model"
import ProductsRepository from "./Products.repository"

export default class ProductsService {
  constructor (
    protected readonly repository: ProductsRepository
  ) {}
  
  public async save(dto): Promise<any> {
    return await this.getAll();
  }

  public async getAll(): Promise<any[]> {
    return await this.repository.getAll();
  }

  public async getOne(id): Promise<any> {
    return await this.repository.getOne(id);
  }

  public async delete(id): Promise<void> {
    await this.delete(id);
  }
}