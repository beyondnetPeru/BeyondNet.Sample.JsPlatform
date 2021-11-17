/* eslint-disable @typescript-eslint/no-explicit-any */
interface ValueObjectProps {
  [index: string]: any;
}

export abstract class ValueObject<T extends ValueObjectProps> {
  constructor(protected props: T) {
    const baseProps: any = {
      ...props,
    };

    this.props = baseProps;
  }

  public equals = (obj?: ValueObject<T>): boolean => {
    if (obj === null || obj === undefined) {
      return false;
    }
    if (obj.props === undefined) {
      return false;
    }
    return JSON.stringify(this.props) === JSON.stringify(obj.props);
  };
}
