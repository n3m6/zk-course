### **Week 2: From Circuits to R1CS (Module 2, Part 1)**

**Goal:** Convert arithmetic circuits to Rank-1 Constraint Systems.

#### Day 9-10

- 2.1 Bilinear Pairings (conceptual)

Goals: 

- Read the chapter thoroughly 
- Experiment with `@noble/curves/bls12-381` to compute pairings
- Verify `e(a·G1, b·G2) = e(G1, G2)^{a·b}` with random scalars 


#### Day 11-12

- 2.2 Algebraic Circuits → R1CS

Goals:

- Create a `Circuit` class that stores gates 
- Write a `flatten` method that generates constraints 
- Implement for `out = (a*b) + (c*d)` (4 wires, 2 multiplication gates) 


#### Days 13-14

- 2.3 Building a ZK Proof from R1CS | 

Goals:

- Implement witness generation for your circuit 
- Write an R1CS verifier that checks `Az * Bz = Cz` 
- Test with valid and invalid witnesses 


#### Day 15-16

- 2.4 Lagrange Interpolation | 

Goals: 

- **Revisit your Week 1 polynomial code** 
- Add proper Lagrange interpolation at arbitrary points 
- Test with small polynomials and verify by evaluation 

