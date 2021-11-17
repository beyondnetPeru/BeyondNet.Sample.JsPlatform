interface IAsyncReadRepository<TEntity, TType> {
    GetAllAsync(limit: number, offset: number): Promise<TEntity[]>;
    GetByIdAsync(id: TType): Promise<TEntity>;
}
export default IAsyncReadRepository;
