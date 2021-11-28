import BaseModel from "../Common/BaseModel";

export default class Product extends BaseModel {
  constructor(
    private connection: any,
    table?: string
  ) {
    super();
    this.table = table;
    if (!table) this.table = this.constructor.name + "s"
  }

  public async find(params?: {
    columns,
    where,
    orderBy
  }) {
    return [];
  }

  public async save(dto) {

  }

  public async findOne({
    columns,
    where,
    orderBy
  }) {
    
  }

  public async delete(id: number) {

  }
}