import { IDomainEvent } from 'events/definition';
export interface IEntity {
    DomainEvents(): IDomainEvent[];
    AddDomainEvent(event: IDomainEvent): void;
    RemoveDomainEvent(event: IDomainEvent): void;
    ClearDomainEvents(): void;
}
export interface IAggregateRoot {
}
