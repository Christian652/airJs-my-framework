export default abstract class BaseModel {
  
  protected table: string

  protected async select({
    columns,
    where,
    orderBy
  }) {

  }

  protected async save(dto) {

  }

  protected async selectOne({
    columns,
    where,
    orderBy
  }) {

  }

  protected async delete(id: number) {

  }
}