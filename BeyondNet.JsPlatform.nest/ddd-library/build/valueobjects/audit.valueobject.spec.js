"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var audit_valueobject_1 = require("./audit.valueobject");
describe('ValueObjects Section', function () {
    describe('Subject: audit.valueobject.ts', function () {
        it('should create a new audit instance', function () {
            var sub = audit_valueobject_1.Audit.Create('foo', new Date());
            expect(sub).toBeDefined();
            expect(sub.createdBy).toBe('foo');
            expect(sub.updatedBy).toBe(undefined);
        });
        it('should update an specific audit instance', function () {
            var audit = audit_valueobject_1.Audit.Create('foo', new Date());
            var sub = audit.Update('foo', new Date());
            expect(sub).toBeDefined();
            expect(sub.createdBy).toBe('foo');
            expect(sub.updatedBy).toBe('foo');
        });
    });
});
//# sourceMappingURL=audit.valueobject.spec.js.map