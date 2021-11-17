abstract class DomainException extends Error {
  private _parameters?: any[] = [];

  public get parameters(): any[] | undefined {
    return this._parameters;
  }

  public constructor(message: string, parameters: any[] | undefined = []) {
    super();

    if (parameters) {
      this.message = `message: ${message}, parameteres: ${parameters.join(', ')}`;
    } else {
      this.message = `message: ${message}`;
    }
  }
}
export default DomainException;
