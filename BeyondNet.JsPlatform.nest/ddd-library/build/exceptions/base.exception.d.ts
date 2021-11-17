declare abstract class DomainException extends Error {
    private _parameters?;
    get parameters(): any[] | undefined;
    constructor(message: string, parameters?: any[] | undefined);
}
export default DomainException;
