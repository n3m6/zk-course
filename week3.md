### **Week 3: Quadratic Arithmetic Programs (Module 2, Part 2)**

**Goal:** Transform R1CS into QAP polynomials.

#### Day 17-18

- [2.5 Schwartz-Zippel Lemma](https://rareskills.io/post/schwartz-zippel-lemma) 

Goals:

- Understand why polynomials are good for ZK 
- Implement a simple test with a **large** prime field: generate two random unequal polynomials of degree `d`, evaluate at many random points, and confirm the collision rate is near `d / |F|`. (Don't use your small Week 1 fields for the probability claim — with `p = 11`, a degree-2 difference collides ~18% of the time.)


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
- Simulate the chapter's **powers-of-tau** setup: pick a random `τ`, create the string of powers `[τ⁰, τ¹, ..., τⁿ]`, then simulate a second participant multiplying every element by their own random secret and "deleting" both secrets 
- Keep α, β, γ, δ for Week 4 — they belong to the Groth16 setup in chapter 2.10, not to this chapter (the γ in this chapter is a generic participant contribution, not Groth16's γ)


#### Day 23-24

- [2.9 Evaluating QAP on Trusted Setup](https://rareskills.io/post/elliptic-curve-qap)

Goals: 

- Implement polynomial evaluation at τ using Horner's method (or the chapter's inner product with powers-of-tau points — both are fine) 
- Compute `U(τ) = Σ aᵢuᵢ(τ)`, `V(τ) = Σ aᵢvᵢ(τ)`, and `W(τ) = Σ aᵢwᵢ(τ)` 
- Compute the quotient `h(x) = (U(x)V(x) − W(x)) / t(x)` by polynomial division (evaluating at one point τ alone does **not** prove divisibility) and check the QAP equation `U·V == W + h·t` holds over the field
