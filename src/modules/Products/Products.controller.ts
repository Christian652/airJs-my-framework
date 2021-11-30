import HttpException from "../../core/common/exceptions/HttpException";
import NotFoundException from "../../core/common/exceptions/NotFoundException";
import IResourceController from "../../core/common/interfaces/IResourceController";
import ProductsService from "./Products.service";

export default class ProductsController implements IResourceController {
  constructor(
    private readonly service: ProductsService
  ) { }

  public async save(dto): Promise<any> {
    try {
      return await this.service.save(dto);
    } catch (error) {
      throw new HttpException(error, 505);
    }
  }

  public async getAll(): Promise<any[]> {
    return await this.service.getAll();
  }

  public async getOne(id): Promise<any> {
    const result = await this.service.getOne(id);
    if (!result) throw new NotFoundException();
  }

  public async delete(id): Promise<void> {
    await this.service.delete(id);
  }
}