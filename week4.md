### **Week 4: Groth16 Protocol & Implementation (Module 2, Part 3)**

**Goal:** Assemble the full Groth16 prover and verifier.


#### Day 25-26 

- [2.10 Groth16 Explained (first read)](https://rareskills.io/post/groth16)

Goals:

- Read the chapter once for overview 
- Map each step to your existing components: QAP, pairings, trusted setup 


#### Day 27-28 

- [Groth16 Deep Dive (re-read with code)](https://rareskills.io/post/groth16)

Goals:

- **Implement the prover** for your tiny circuit using the chapter's final formulas (the ones with the random salts `r` and `s` — without them the proof is not zero-knowledge, as the chapter explains): 
    - `A = [α]₁ + Σ aᵢuᵢ(τ) + r[δ]₁` (G1 point) 
    - `B = [β]₂ + Σ aᵢvᵢ(τ) + s[δ]₂` (G2 point) 
    - `C = Σ_{i=ℓ+1} aᵢ[Ψᵢ]₁ + h(τ)t(τ) + A·s + B·r − r·s·[δ]₁` (G1 point, where `A` and `B` in the correction terms are the scalar components; compute `h(τ)t(τ)` with the chapter's δ-scaled SRS) 
- Store the proof as `{A: G1Point, B: G2Point, C: G1Point}` 


#### Day 29-30 

- Groth16 Verification

Goals:

- **Implement the verifier** using `bls12_381.pairing` (from `@noble/curves@1.9.1`; see the API notes in the README) 
- Write the chapter's verification equation: `e(A, B) == e([α]₁, [β]₂) · e(X, [γ]₂) · e(C, [δ]₂)`, where `X = Σ_{i=1}^{ℓ} aᵢ[Ψᵢ]₁` is the verifier-computed sum over the public witness entries, **not** a single "public inputs polynomial" 
- Compare the two sides with `Fp12.eql` after multiplying the right-hand pairings with `Fp12.mul` 
- Test with valid proofs 


#### Day 31-32 

- Final Integration & Testing

Goals:

- Create a small test suite: 
    - Circuit: `a * b = c` with public input `c` (keep the original public `c` fixed when testing a wrong witness) 
    - Generate proof with correct witness 
    - Verify → ✅ 
    - Tamper with exactly one proof component → ❌ (note: Groth16 proofs are malleable — negating *both* A and B together still verifies, which is expected) 
    - Try wrong witness → ❌ 
- **Document your journey** in a GitHub repo 
