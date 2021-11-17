"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var DomainEvent = /** @class */ (function () {
    function DomainEvent() {
        var objTypeName = this.constructor.name.toLowerCase();
        this._eventId = objTypeName + "-" + uuid_1.v4().toLowerCase();
        this._type = objTypeName;
        this._dateTime = new Date();
    }
    Object.defineProperty(DomainEvent.prototype, "eventId", {
        get: function () {
            return this._eventId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DomainEvent.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DomainEvent.prototype, "dateTime", {
        get: function () {
            return this._dateTime;
        },
        enumerable: false,
        configurable: true
    });
    return DomainEvent;
}());
exports.default = DomainEvent;
//# sourceMappingURL=base.events.js.map