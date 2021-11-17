interface IAsyncRepository<TEntity> {
  CreateAsync(item: TEntity): Promise<TEntity>;
  UpdateAsync(item: TEntity): Promise<void>;
  DeleteAsync(item: TEntity): Promise<void>;
}

export default IAsyncRepository;
