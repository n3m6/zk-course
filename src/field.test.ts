import { describe, it, expect } from 'vitest';
import { Field } from './field';

// Using a small prime for testing
const PRIME = 17n;

describe('Field', () => {
  describe('basic operations', () => {
    it('should create a field element', () => {
      const a = new Field(5n, PRIME);
      expect(a.value).toBe(5n);
    });

    it('should reduce values mod prime', () => {
      const a = new Field(20n, PRIME);
      expect(a.value).toBe(3n); // 20 mod 17 = 3
    });

    it('should handle negative values', () => {
      const a = new Field(-3n, PRIME);
      expect(a.value).toBe(14n); // -3 mod 17 = 14
    });
  });

  describe('addition', () => {
    it('should add two field elements', () => {
      const a = new Field(5n, PRIME);
      const b = new Field(7n, PRIME);
      const result = a.add(b);
      expect(result.value).toBe(12n);
    });

    it('should wrap around on overflow', () => {
      const a = new Field(10n, PRIME);
      const b = new Field(10n, PRIME);
      const result = a.add(b);
      expect(result.value).toBe(3n); // 20 mod 17 = 3
    });
  });

  describe('multiplication', () => {
    it('should multiply two field elements', () => {
      const a = new Field(3n, PRIME);
      const b = new Field(4n, PRIME);
      const result = a.mul(b);
      expect(result.value).toBe(12n);
    });

    it('should wrap around on overflow', () => {
      const a = new Field(5n, PRIME);
      const b = new Field(5n, PRIME);
      const result = a.mul(b);
      expect(result.value).toBe(8n); // 25 mod 17 = 8
    });
  });

  describe('field properties', () => {
    it('should satisfy distributive property: (a+b)*c == a*c + b*c', () => {
      const a = new Field(3n, PRIME);
      const b = new Field(5n, PRIME);
      const c = new Field(7n, PRIME);

      // Left side: (a + b) * c
      const leftSide = a.add(b).mul(c);

      // Right side: a*c + b*c
      const rightSide = a.mul(c).add(b.mul(c));

      expect(leftSide.equals(rightSide)).toBe(true);
    });

    it('should satisfy commutative property for addition: a+b == b+a', () => {
      const a = new Field(3n, PRIME);
      const b = new Field(11n, PRIME);

      expect(a.add(b).equals(b.add(a))).toBe(true);
    });

    it('should satisfy commutative property for multiplication: a*b == b*a', () => {
      const a = new Field(3n, PRIME);
      const b = new Field(11n, PRIME);

      expect(a.mul(b).equals(b.mul(a))).toBe(true);
    });

    it('should satisfy associative property for addition: (a+b)+c == a+(b+c)', () => {
      const a = new Field(3n, PRIME);
      const b = new Field(5n, PRIME);
      const c = new Field(7n, PRIME);

      const left = a.add(b).add(c);
      const right = a.add(b.add(c));

      expect(left.equals(right)).toBe(true);
    });

    it('should satisfy associative property for multiplication: (a*b)*c == a*(b*c)', () => {
      const a = new Field(3n, PRIME);
      const b = new Field(5n, PRIME);
      const c = new Field(7n, PRIME);

      const left = a.mul(b).mul(c);
      const right = a.mul(b.mul(c));

      expect(left.equals(right)).toBe(true);
    });
  });

  describe('BigInt support verification', () => {
    it('should handle large BigInt values', () => {
      // A larger prime for cryptographic work
      const largePrime = 21888242871839275222246405745257275088548364400416034343698204186575808495617n;
      
      const a = new Field(12345678901234567890n, largePrime);
      const b = new Field(98765432109876543210n, largePrime);
      
      const sum = a.add(b);
      const product = a.mul(b);
      
      // Verify the operations complete and produce valid field elements
      expect(sum.value < largePrime).toBe(true);
      expect(product.value < largePrime).toBe(true);
    });
  });
});
