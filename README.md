## 4-Week TypeScript Learning Plan for Groth16 from Scratch

This course plan references the RareSkills Zero Knowledge Book available online at https://rareskills.io/zk-book

This plan assumes 15–20 hours/week and that you’ll implement core components yourself, using libraries only where absolutely necessary (e.g., for elliptic curve pairings). Each week builds directly on the previous one.

*   Re-read chapters multiple times.
*   Debug subtle off-by-one errors in polynomial interpolation.
*   Possibly spend extra time understanding pairings (the most abstract part).

The goal is **functional understanding**, not production-ready code. By the end, you’ll have a TypeScript project that demonstrates the entire Groth16 pipeline, which is a tremendous achievement.

If you hit a roadblock, the RareSkills book has a community Discord where you can ask questions (the invite is linked from the book page). The book's code examples are mostly Python, but the logic translates directly to TypeScript.

### Course Plan

- [Week 1](week1.md)
- [Week 2](week2.md)
- [Week 3](week3.md)
- [Week 4](week4.md)

### 📚 Local Chapter Copies

All 19 RareSkills chapters referenced by the plan have been converted to Markdown
files in the [`course/`](course/README.md) folder for offline study. Each file links
back to its original RareSkills URL.


## 🛠️ TypeScript Libraries You'll Use

| Library | Purpose | When |
| :--- | :--- | :--- |
| **None (pure TS)** | Field arithmetic, polynomials, R1CS | Weeks 1-3 |
| `@noble/curves@1.9.1` | Elliptic curves, pairings (BLS12-381) | Weeks 2-4 |
| `ffjavascript` (optional) | If you need faster field ops | Optional |
| `vitest` / `jest` | Testing all components | Throughout |



*   **Recommended TypeScript Setup:**
    *   Use Node.js with `ts-node` or `bun` for fast iteration.
    *   Enable `"target": "es2020"` in `tsconfig.json` for `BigInt` support.
    *   Write tests using `vitest` or `jest` to verify properties (e.g., `(a+b)*c == a*c + b*c` in the field).

### 💡 TypeScript-Specific Tips

*   **Use `bigint` Literals:** `123n` for constants. `bigint` supports `+`, `-`, `*`, `/`, `%`, and `**`, but it cannot be mixed with `number`. Note that `/` truncates toward zero, so reduce with `((a % p) + p) % p` for finite-field arithmetic.
*   **Modular Inverse:** Implement `extendedGCD` using `bigint` to compute modular inverses without floating point.
*   **Sparse Matrices:** For R1CS, use `Array<Map<number, bigint>>` to save memory, since constraints are sparse.
*   **Testing:** Write property-based tests (e.g., using `fast-check`) to verify field axioms and polynomial identities.
*   **`@noble/curves` API (important):** Pin version `1.9.1` — the v2.x line changed the import path and exports. With v1.9.1 use `import { bls12_381 } from '@noble/curves/bls12-381'`, then `bls12_381.pairing`, `bls12_381.fields.Fp12`, `bls12_381.G1.ProjectivePoint`, and `bls12_381.G2.ProjectivePoint`. Pairing results are plain Fp12 objects: compare with `Fp12.eql(a, b)`, multiply with `Fp12.mul`, and never use `===`. Also, `point.multiply(0n)` throws — use the group's `ZERO` point instead.
*   **Debugging:** Use `console.log` liberally and compare intermediate values with known examples from the RareSkills book (they often provide numerical examples).


---

## 📈 Success Criteria

By the end of Week 4, you should have:

1.  **A GitHub repository** with clean TypeScript code implementing each component
2.  **Working finite field and polynomial arithmetic** from scratch
3.  **An R1CS generator and verifier** for simple circuits
4.  **A QAP converter** using Lagrange interpolation
5.  **A complete Groth16 prover/verifier** (using `@noble/curves` for pairings) that can handle a toy circuit like `a*b = c`
6.  **Tests** that verify correctness and catch invalid proofs

---

## 💡 If You Have Extra Time

If you finish early or want deeper understanding:

*   **Module 3 (Circom)**: Implement your toy circuit in Circom to see how real ZK circuits are written — start with [Introduction to ZK Circuits with Circom](https://rareskills.io/post/circom-intro)
*   **Module 5 (NTT)**: Optimize your polynomial multiplication using NTT — start with [Number Theoretic Transform](https://rareskills.io/post/number-theoretic-transform)


