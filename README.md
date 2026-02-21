## 4-Week TypeScript Learning Plan for Groth16 from Scratch

This course plan references the Rareskills Zero Knowledge Book available online at https://rareskills.io/tutorials/zk-book

This plan assumes 15–20 hours/week and that you’ll implement core components yourself, using libraries only where absolutely necessary (e.g., for elliptic curve pairings). Each week builds directly on the previous one.

*   Re-read chapters multiple times.
*   Debug subtle off-by-one errors in polynomial interpolation.
*   Possibly spend extra time understanding pairings (the most abstract part).

The goal is **functional understanding**, not production-ready code. By the end, you’ll have a TypeScript project that demonstrates the entire Groth16 pipeline, which is a tremendous achievement.

If you hit a roadblock, the RareSkills book has a community Discord where you can ask questions. Also, the student implementations referenced (like the five-part series) may have code in other languages, but the logic translates directly to TypeScript.

*   **Recommended TypeScript Setup:**
    *   Use Node.js with `ts-node` or `bun` for fast iteration.
    *   Enable `"target": "es2020"` in `tsconfig.json` for `BigInt` support.
    *   Write tests using `vitest` or `jest` to verify properties (e.g., `(a+b)*c == a*c + b*c` in the field).

### 💡 TypeScript-Specific Tips

*   **Use `bigint` Literals:** `123n` for constants. Remember that arithmetic operators don’t work with `bigint`; use `+`, `-`, `*`, `/` (with explicit `BigInt` division).
*   **Modular Inverse:** Implement `extendedGCD` using `bigint` to compute modular inverses without floating point.
*   **Sparse Matrices:** For R1CS, use `Array<Map<number, bigint>>` to save memory, since constraints are sparse.
*   **Testing:** Write property-based tests (e.g., using `fast-check`) to verify field axioms and polynomial identities.
*   **Debugging:** Use `console.log` liberally and compare intermediate values with known examples from the RareSkills book (they often provide numerical examples).

### Course Plan

- [Week 1](week1.md)
- [Week 2](week2.md)
- [Week 3](week3.md)
- [Week 4](week4.md)
