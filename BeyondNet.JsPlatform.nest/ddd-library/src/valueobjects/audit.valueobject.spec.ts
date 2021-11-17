import { Audit } from './audit.valueobject';

describe('ValueObjects Section', () => {
  describe('Subject: audit.valueobject.ts', () => {
    it('should create a new audit instance', () => {
      const sub = Audit.Create('foo', new Date());

      expect(sub).toBeDefined();

      expect(sub.createdBy).toBe('foo');
      expect(sub.updatedBy).toBe(undefined);
    });

    it('should update an specific audit instance', () => {
      const audit = Audit.Create('foo', new Date());
      const sub = audit.Update('foo', new Date());

      expect(sub).toBeDefined();

      expect(sub.createdBy).toBe('foo');
      expect(sub.updatedBy).toBe('foo');
    });
  });
});
