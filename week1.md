### **Week 1: Mathematical Foundations (Module 1)**

**Goal:** Implement finite fields, groups, and elliptic curve basics in TypeScript.

#### Day 1-2

- [1.1 P vs NP & applications](https://rareskills.io/post/p-vs-np) 
- [1.2 Arithmetic Circuits](https://rareskills.io/post/arithmetic-circuit)

Goals:

- Write a blog-post-style explanation of P vs NP in your own words 
- Design a simple arithmetic circuit for `a² + b = c` (draw it, then represent as a data structure)

#### Day 3-4

- [1.3 Finite Fields & Modular Arithmetic](https://rareskills.io/post/finite-fields)

Goals: 

- Create (or enhance) your `PrimeField` class with full arithmetic: `add`, `sub`, `mul`, `div`, `inv`, `pow`, equality, and normalization 
- Implement modular exponentiation and use Fermat's Little Theorem to compute inverses as `a^(p-2) mod p` (the chapter's method; also implement `extendedGCD` later) 
- Add modular square roots exactly as the chapter describes: for primes `p ≡ 3 (mod 4)` use `a^((p+1)/4) mod p`; for primes `p ≡ 1 (mod 4)` implement Tonelli-Shanks (the chapter says the simple formula only works for `p = 4k + 3`)

#### Day 5-6

- [1.4 Set Theory](https://rareskills.io/post/set-theory) 
- [1.5 Abstract Algebra (intro)](https://rareskills.io/post/abstract-algebra) 
- [1.6 Group Theory](https://rareskills.io/post/group-theory)

Goals:

- Create a `Group` interface and implement `CyclicGroup` 
- Test with multiplicative groups of finite fields 
- *Optional extra material:* verify Lagrange's theorem by exhaustive search on small groups (the chapter covers cyclic groups and group order but does not teach Lagrange's theorem — you cannot "prove" it by brute force, only check examples)

#### Day 7-8

- [1.7 Homomorphisms](https://rareskills.io/post/homomorphisms) 
- [1.8 Elliptic Curve Point Addition](https://rareskills.io/post/elliptic-curve-addition) 
- [1.9 Elliptic Curves over Finite Fields](https://rareskills.io/post/elliptic-curves-finite-fields)

Goals: 

- Implement a simple Weierstrass curve `y² = x³ + ax + b` over a small field 
- Code point addition, doubling, and scalar multiplication 
- Verify against the chapter's hand-computed points on `y² = x³ + 3 (mod 11)` and group-law tests (`P + O == P`, `nP == O`, `P + Q == Q + P`). Note: `@noble/curves` ships standard curves (secp256k1, BLS12-381, etc.) and does not directly expose your arbitrary small-field curve, so it is not a drop-in test-vector source here; you'll use `@noble/curves` for pairings starting in Week 2

