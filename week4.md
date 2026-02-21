
### **Week 4: Groth16 Prover & Verifier Logic**

**Goal:** Implement the core Groth16 protocol (setup, prove, verify) using your QAP and a pairing library.

*   **Math Focus:** Groth16 protocol (as described in RareSkills).
*   **TypeScript Tasks:**
    1.  **Setup (simplified):** Generate random `α, β, γ, δ, τ` in the field. Compute the "toxic waste" and the proving/verification keys. For learning, you can simulate this with your field class, ignoring the elliptic curve point encoding initially.
        *   Use `@noble/curves` to map field elements to curve points: `G1 = bls12_381.G1.ProjectivePoint.BASE.multiply(someFieldElement)`.
    2.  **Prover Logic:** Write a function `prove(witness, pk)` that computes the Groth16 proof elements `A, B, C` as curve points.
        *   This involves polynomial evaluations at `τ` and combining them with the trapdoors. You’ll need to evaluate your QAP polynomials at `τ` (use Horner's method with BigInt).
        *   Use the pairing library's scalar multiplication and point addition.
    3.  **Verifier Logic:** Implement `verify(proof, publicInputs, vk)` that checks the pairing equation:
        *   `e(A, B) == e(α, β) * e(public polynomial, γ) * e(C, δ)`
        *   Use the `bls12_381.pairing` function.
    4.  **End-to-End Test:** Pick a tiny circuit (e.g., `a*b = c`), generate a valid witness, compute a proof, and verify it. Then try an invalid witness to ensure verification fails.

*   **Key Libraries:**
    *   `@noble/curves` – for BLS12-381 curve operations and pairings.
    *   `ffjavascript` (optional) – if you need more efficient finite field arithmetic, but `BigInt` is fine for learning.
