
### **Week 2: Arithmetic Circuits & R1CS**

**Goal:** Translate a simple computation into an arithmetic circuit and then into a Rank-1 Constraint System (R1CS).

*   **Math Focus:** Chapters 4–5 and R1CS sections.
*   **TypeScript Tasks:**
    1.  **Circuit Representation:** Define TypeScript interfaces for a circuit with `wires`, `gates` (addition/multiplication). For a simple function like `out = (a*b) + c`, manually create the wire indices.
    2.  **R1CS Generator:** Write a function `circuitToR1CS(circuit)` that outputs three matrices (A, B, C) representing the constraints. For each multiplication gate `(left * right = out)`, generate a row where A has a `1` at left wire, B has `1` at right wire, C has `1` at out wire. For addition, you can rewrite as multiplication with a constant `1` or handle separately.
        *   Represent matrices as `Array<Map<number, bigint>>` (sparse) or dense `bigint[][]` for tiny circuits.
    3.  **Witness Generator:** Write a function that takes inputs and computes all intermediate wire values, producing a full witness vector `w`.
    4.  **Verification:** Write a function `checkR1CS(A, B, C, w)` that asserts `(A·w) * (B·w) == (C·w)` element-wise (using your field class).

*   **Test Case:** Use `a=3, b=4, c=5` → `out=17`. Your R1CS should have at least two constraints: one for multiplication, one for addition (or combine using a dummy multiplication by 1). Verify that your witness satisfies all constraints.
