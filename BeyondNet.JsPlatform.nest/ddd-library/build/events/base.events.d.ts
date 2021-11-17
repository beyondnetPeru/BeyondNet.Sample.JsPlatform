import { IDomainEvent } from './definition';
declare abstract class DomainEvent implements IDomainEvent {
    private _eventId;
    get eventId(): string;
    private _type;
    get type(): string;
    private _dateTime;
    get dateTime(): Date;
    protected constructor();
}
export default DomainEvent;
