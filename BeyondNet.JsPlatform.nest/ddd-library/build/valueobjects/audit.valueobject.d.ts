import { ValueObject } from './base.valueobject';
export declare type AuditProps = {
    createdBy: string;
    createdDate: Date;
    updatedBy?: string;
    updatedDate?: Date;
    timestamp?: number;
};
export declare class Audit extends ValueObject<AuditProps> {
    private _createdBy;
    get createdBy(): string;
    private _createdDate?;
    get createdDate(): Date | undefined;
    private _updatedBy?;
    get updatedBy(): string | undefined;
    private _updatedDate?;
    get updatedDate(): Date | undefined;
    private _timestamp?;
    get timestamp(): number | undefined;
    private constructor();
    static Create: (createdBy: string, createdDate: Date) => Audit;
    Update: (updatedBy: string, updatedDate: Date) => Audit;
}
