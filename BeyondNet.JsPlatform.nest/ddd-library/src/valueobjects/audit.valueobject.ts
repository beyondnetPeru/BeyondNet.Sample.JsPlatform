import { ValueObject } from './base.valueobject';

export type AuditProps = {
  createdBy: string;
  createdDate: Date;
  updatedBy?: string;
  updatedDate?: Date;
  timestamp?: number;
};

export class Audit extends ValueObject<AuditProps> {
  private _createdBy: string = 'unknown';
  public get createdBy(): string {
    return this._createdBy;
  }

  private _createdDate?: Date;
  public get createdDate(): Date | undefined {
    return this._createdDate;
  }

  private _updatedBy?: string;
  public get updatedBy(): string | undefined {
    return this._updatedBy ?? undefined;
  }

  private _updatedDate?: Date;
  public get updatedDate(): Date | undefined {
    return this._updatedDate ?? undefined;
  }

  private _timestamp?: number;
  public get timestamp(): number | undefined {
    return this._timestamp ?? undefined;
  }

  private constructor(props: AuditProps) {
    super(props);

    this._createdBy = props.createdBy;
    this._createdDate = props.createdDate;
    this._updatedBy = props.updatedBy;
    this._updatedDate = props.updatedDate;
    this._timestamp = +new Date();
  }

  public static Create = (createdBy: string, createdDate: Date): Audit => {
    const props = { createdBy, createdDate } as AuditProps;

    return new Audit({ ...props });
  };

  public Update = (updatedBy: string, updatedDate: Date): Audit => {
    const props = {
      createdBy: this._createdBy,
      createdDate: this._createdDate,
      updatedBy,
      updatedDate,
    } as AuditProps;

    return new Audit({ ...props });
  };
}
