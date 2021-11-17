export interface IDomainEvent {
    eventId: string;
    type: string;
    dateTime: Date;
}
