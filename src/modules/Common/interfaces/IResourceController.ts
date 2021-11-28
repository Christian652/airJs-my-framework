export default interface IResourceController {
  save(dto);
  getAll();
  getOne(id: number);
  delete(id: number);
}