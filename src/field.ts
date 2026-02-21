/**
 * A simple finite field implementation for demonstration.
 * This uses modular arithmetic over a prime field.
 */
export class Field {
  readonly value: bigint;
  readonly prime: bigint;

  constructor(value: bigint, prime: bigint) {
    // Ensure value is within field (mod prime)
    this.value = ((value % prime) + prime) % prime;
    this.prime = prime;
  }

  add(other: Field): Field {
    this.assertSamePrime(other);
    return new Field(this.value + other.value, this.prime);
  }

  sub(other: Field): Field {
    this.assertSamePrime(other);
    return new Field(this.value - other.value, this.prime);
  }

  mul(other: Field): Field {
    this.assertSamePrime(other);
    return new Field(this.value * other.value, this.prime);
  }

  equals(other: Field): boolean {
    return this.value === other.value && this.prime === other.prime;
  }

  private assertSamePrime(other: Field): void {
    if (this.prime !== other.prime) {
      throw new Error('Cannot operate on fields with different primes');
    }
  }
}
