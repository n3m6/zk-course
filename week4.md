### **Week 4: Groth16 Protocol & Implementation (Module 2, Part 3)**

**Goal:** Assemble the full Groth16 prover and verifier.


#### Day 25-26 

- 2.10 Groth16 Explained (first read)

Goals:

- Read the chapter once for overview 
- Map each step to your existing components: QAP, pairings, trusted setup 


#### Day 27-28 

- Groth16 Deep Dive (re-read with code)

Goals:

- **Implement the prover** for your tiny circuit: 
    - Compute A, B, C as per the spec 
    - Use your field arithmetic and curve library 
- Store the proof as `{A: G1Point, B: G2Point, C: G1Point}` 


#### Day 29-30 

- Groth16 Verification

Goals:

- **Implement the verifier** using `bls12_381.pairing` 
- Write the pairing equation: `e(A, B) == e(α, β) * e(public inputs polynomial, γ) * e(C, δ)` 
- Test with valid proofs 


#### Day 31-32 

- Final Integration & Testing

Goals:

- Create a small test suite: 
    - Circuit: `a * b = c` with public input `c` 
    - Generate proof with correct witness 
    - Verify → ✅ 
    - Tamper with proof → ❌ 
    - Try wrong witness → ❌ 
- **Document your journey** in a GitHub repo 
