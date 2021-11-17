interface ValueObjectProps {
    [index: string]: any;
}
export declare abstract class ValueObject<T extends ValueObjectProps> {
    protected props: T;
    constructor(props: T);
    equals: (obj?: ValueObject<T> | undefined) => boolean;
}
export {};
