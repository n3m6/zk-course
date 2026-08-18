### **Week 2: From Circuits to R1CS (Module 2, Part 1)**

**Goal:** Convert arithmetic circuits to Rank-1 Constraint Systems.

#### Day 9-10

- [2.1 Bilinear Pairings in Python, Solidity, and the EVM](https://rareskills.io/post/bilinear-pairing)

Goals: 

- Read the chapter thoroughly (the source uses BN128/`py_ecc`; translate the ideas to BLS12-381) 
- Install `@noble/curves@1.9.1` and import `{ bls12_381 }` from `@noble/curves/bls12-381` 
- Compute `bls12_381.pairing(a·G1, b·G2)` and verify `e(a·G1, b·G2) == e(G1, G2)^(a·b)` with random scalars. Compare the two Fp12 values with `bls12_381.fields.Fp12.eql(...)` — the pairing result is a plain object, so `===` will not work


#### Day 11-12

- [2.2 Algebraic Circuits → R1CS](https://rareskills.io/post/rank-1-constraint-system)

Goals:

- Create a `Circuit` class that stores gates 
- Write a `flatten` method that generates constraints 
- Implement for `out = (a*b) + (c*d)`: witness layout `[1, out, a, b, c, d, v1, v2]` where `v1 = a*b` and `v2 = c*d`. There are 2 non-constant multiplication constraints (2 matrix rows); the final addition is folded into the `O`/`C` matrix — "addition is free" in R1CS, as the chapter explains


#### Days 13-14

- [2.3 Building a ZK Proof from R1CS](https://rareskills.io/post/r1cs-zkp)

Goals:

- Implement witness generation for your circuit 
- Write an R1CS verifier that checks the Hadamard product `(A·w) ∘ (B·w) == C·w` 
- Test with valid and invalid witnesses 
- Note: chapter 2.3 then "encrypts" the witness as elliptic-curve points and verifies with pairings — do that as the follow-up exercise if time permits


#### Day 15-16

- [2.4 Lagrange Interpolation](https://rareskills.io/post/python-lagrange-interpolation)

Goals: 

- **Revisit your Week 1 polynomial code** 
- Add proper Lagrange interpolation at arbitrary points 
- Test with small polynomials and verify by evaluation 

