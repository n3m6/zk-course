
### **Week 3: Quadratic Arithmetic Programs (QAP) & Elliptic Curve Pairings (Conceptual)**

**Goal:** Transform R1CS into polynomial equations (QAP) and understand the role of pairings.

*   **Math Focus:** QAP construction and pairings overview.
*   **TypeScript Tasks:**
    1.  **QAP from R1CS:** Implement a function `r1csToQAP(A, B, C, field, t)` where `t` is a set of evaluation points (typically `[1,2,3,...]`). For each matrix column, use Lagrange interpolation to create polynomials `A_i(x)`, `B_i(x)`, `C_i(x)`.
        *   This involves building a `Polynomial` for each column. Your `lagrange` function from Week 1 will be used repeatedly.
    2.  **Target Polynomial:** Construct `Z(x) = (x-1)(x-2)...(x-n)` for `n` constraints.
    3.  **Check Divisibility:** For a valid witness `w`, compute `P(x) = (Σ w_i A_i(x)) * (Σ w_i B_i(x)) - Σ w_i C_i(x)`. Verify that `P(x)` is divisible by `Z(x)` (i.e., polynomial division remainder zero). This is the core of the QAP.
        *   Implement polynomial division (or evaluation at all `t` points to check zeroes).
    4.  **Elliptic Curves & Pairings (Conceptual):** Read the RareSkills chapter on pairings. Do **not** implement pairings from scratch. Instead, get familiar with a TypeScript library that provides them:
        *   `@noble/curves` (specifically `bls12-381`) offers a clean API for group operations and pairings.
        *   Experiment: Create random group elements and compute `pairing(G1_point, G2_point)`. Verify bilinearity with simple examples (e.g., `e(a*G1, b*G2) == e(G1, G2)^{ab}`).
