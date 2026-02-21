
### **Week 1: Finite Fields & Polynomials in TypeScript**

**Goal:** Implement a prime field and basic polynomial operations using native `BigInt`.

*   **Math Focus:** Chapters 1–3 of the RareSkills book.
*   **TypeScript Tasks:**
    1.  **Finite Field Class:** Create a `class PrimeField` that stores a prime `p` (as `bigint`) and provides methods:
        *   `add(a: bigint, b: bigint): bigint`
        *   `sub(a: bigint, b: bigint): bigint`
        *   `mul(a: bigint, b: bigint): bigint`
        *   `inv(a: bigint): bigint` (using Fermat’s little theorem or extended Euclidean algorithm)
        *   `exp(base: bigint, exponent: bigint): bigint`
        *   Test with a small prime like `7n` or `13n`.
    2.  **Polynomial Class:** Implement a `class Polynomial` that stores coefficients as `bigint[]` in a given field.
        *   Methods: `evaluate(x: bigint)`, `add(Polynomial)`, `multiply(Polynomial)`, `degree()`.
        *   Write a function to find roots by brute force for tiny fields (to internalize the product-of-roots property).
    3.  **Lagrange Interpolation (preview):** Implement a simple `lagrange(points: {x: bigint, y: bigint}[])` function that returns the unique polynomial of degree ≤ n-1. This will be crucial for QAPs later.

*   **Recommended TypeScript Setup:**
    *   Use Node.js with `ts-node` or `bun` for fast iteration.
    *   Enable `"target": "es2020"` in `tsconfig.json` for `BigInt` support.
    *   Write tests using `vitest` or `jest` to verify properties (e.g., `(a+b)*c == a*c + b*c` in the field).
