import { AggregateRoot } from '@nestjs/cqrs';
declare abstract class AggregateBase extends AggregateRoot {
    constructor();
}
export default AggregateBase;
