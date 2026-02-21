### **Week 3: Quadratic Arithmetic Programs (Module 2, Part 2)**

**Goal:** Transform R1CS into QAP polynomials.

#### Day 17-18

- [2.5 Schwartz-Zippel Lemma](https://rareskills.io/post/schwartz-zippel-lemma) 

Goals:

- Understand why polynomials are good for ZK 
- Implement a simple test: generate two random unequal polynomials, evaluate at random points, see how often they collide 


#### Day 19-20

- [2.6 Quadratic Arithmetic Programs](https://rareskills.io/post/quadratic-arithmetic-program) 
- [2.7 R1CS → QAP in Python](https://rareskills.io/post/r1cs-to-qap) 

Goals:

- **Port the Python examples to TypeScript** 
- Write `r1csToQAP` that takes A, B, C matrices and returns column polynomials 
- Use your Lagrange interpolation from Week 2 


#### Day 21-22

- [2.8 Trusted Setup (conceptual)](https://rareskills.io/post/trusted-setup) 

Goals:

- Understand the purpose of toxic waste 
- Simulate a trusted setup by generating random α, β, γ, δ, τ in your field 
- Store these as your "toxic waste" (for learning only!) 


#### Day 23-24

- [2.9 Evaluating QAP on Trusted Setup](https://rareskills.io/post/elliptic-curve-qap)

Goals: 

- Implement polynomial evaluation at τ using Horner's method 
- Compute the three QAP polynomials: `A(τ)`, `B(τ)`, `C(τ)` 
- Verify that `A(τ)*B(τ) - C(τ)` is divisible by the target polynomial 
