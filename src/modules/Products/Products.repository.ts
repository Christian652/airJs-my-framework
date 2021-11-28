import ICrud from "../Common/interfaces/ICrud";
import Product from "./Product.model";

export default class ProductsRepository implements ICrud {
  constructor (
    public model: Product
  ) {}

  public async save(dto): Promise<any> {
    return await this.model.save(dto);
  }

  public async getAll(): Promise<any[]> {
    return await this.model.find();
  }

  public async getOne(id: number): Promise<any> {
    // To do 
  }

  public async delete(id: number): Promise<void> {
    // To do 
  }
}