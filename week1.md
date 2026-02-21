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

- **Enhance your `PrimeField` class** from my previous plan with full arithmetic 
- Implement Fermat's Little Theorem for inverses 
- Add a square root method (Tonelli-Shanks for primes ≡ 1 mod 4) 

#### Day 5-6

- [1.4 Set Theory](https://rareskills.io/post/set-theory) 
- [1.5 Abstract Algebra (intro)](https://rareskills.io/post/abstract-algebra) 
- [1.6 Group Theory](https://rareskills.io/post/group-theory)

Goals:

- Create a `Group` interface and implement `CyclicGroup` 
- Test with multiplicative groups of finite fields • Prove Lagrange's theorem by brute force for small groups 

#### Day 7-8

- [1.7 Homomorphisms](https://rareskills.io/post/homomorphisms) 
- [1.8 Elliptic Curve Point Addition](https://rareskills.io/post/elliptic-curve-addition) 
- [1.9 Elliptic Curves over Finite Fields](https://rareskills.io/post/elliptic-curves-finite-fields)

Goals: 

- Implement a simple Weierstrass curve `y² = x³ + ax + b` over a small field 
- Code point addition, doubling, and scalar multiplication 
- **Use `@noble/curves` to verify your implementation** against known test vectors 

