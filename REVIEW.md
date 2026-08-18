# Review: 4-Week TypeScript Groth16 Study Plan

Scope: every Markdown week file, the README, and the project configuration were checked
against the actual RareSkills Book of Zero Knowledge pages they link to. All pages were
fetched and compared chapter-by-chapter, and the recommended pairing library was tested
against the exact instructions in the plan.

Verdict: **the link map is correct, but the material needed several content and
project-setup corrections.** All corrections listed below have been applied.

## 1. Link audit (all links verified)

Every link in the week files returns HTTP 200 and points to the intended RareSkills
chapter. Chapter numbers match the book's table of contents exactly:

| Week file label | URL | Result |
| --- | --- | --- |
| 1.1 P vs NP | `/post/p-vs-np` | ✅ 200, title matches |
| 1.2 Arithmetic Circuits | `/post/arithmetic-circuit` | ✅ 200, title matches |
| 1.3 Finite Fields | `/post/finite-fields` | ✅ 200, title matches |
| 1.4 Set Theory | `/post/set-theory` | ✅ 200, title matches |
| 1.5 Abstract Algebra | `/post/abstract-algebra` | ✅ 200, title matches |
| 1.6 Group Theory | `/post/group-theory` | ✅ 200, title matches |
| 1.7 Homomorphisms | `/post/homomorphisms` | ✅ 200, title matches |
| 1.8 EC Point Addition | `/post/elliptic-curve-addition` | ✅ 200, title matches |
| 1.9 EC over Finite Fields | `/post/elliptic-curves-finite-fields` | ✅ 200, title matches |
| 2.1 Bilinear Pairings | `/post/bilinear-pairing` | ✅ 200, title matches |
| 2.2 Algebraic Circuits → R1CS | `/post/rank-1-constraint-system` | ✅ 200, title matches |
| 2.3 ZK Proof from R1CS | `/post/r1cs-zkp` | ✅ 200, title matches |
| 2.4 Lagrange Interpolation | `/post/python-lagrange-interpolation` | ✅ 200, title matches |
| 2.5 Schwartz-Zippel | `/post/schwartz-zippel-lemma` | ✅ 200, title matches |
| 2.6 QAP | `/post/quadratic-arithmetic-program` | ✅ 200, title matches |
| 2.7 R1CS → QAP in Python | `/post/r1cs-to-qap` | ✅ 200, title matches |
| 2.8 Trusted Setup | `/post/trusted-setup` | ✅ 200, title matches |
| 2.9 Evaluating QAP on Trusted Setup | `/post/elliptic-curve-qap` | ✅ 200, title matches |
| 2.10 Groth16 Explained | `/post/groth16` | ✅ 200, title matches |

Notes:

- The old book URL `https://rareskills.io/tutorials/zk-book` still works (200) but
  redirects to the canonical `https://rareskills.io/zk-book`; the README now uses the
  canonical URL.
- The book TOC confirms Module 3 is Circom and Module 5 is NTT, so the "Extra Time"
  references are correct. Direct starter links were added.

## 2. High-priority findings (fixed)

### 2.1 `@noble/curves` was referenced but missing, and the current latest version breaks the instructions

- `package.json` had no `@noble/curves` dependency even though Weeks 2-4 depend on it.
- At review time the latest release is `@noble/curves@2.3.0`. In v2.x:
  - the import path must be `@noble/curves/bls12-381.js` (with `.js`), and
  - the exports changed (named `bls12_381` / `bls12_381_Fr`, `G1.Point` instead of
    `G1.ProjectivePoint`, no `bls12_381.pairing` surface at the documented location).
  The plan's instructions (`@noble/curves/bls12-381`, `bls12_381.pairing`) only match
  v1.x.
- Fix applied: pinned `@noble/curves@1.9.1`, which matches every instruction in the
  plan. Verified locally:
  - `require('@noble/curves/bls12-381').bls12_381` works,
  - `e(a·G1, b·G2) == e(G1, G2)^(a·b)` passes using `Fp12.pow` + `Fp12.eql`.
- The README now documents the API pitfalls found during testing:
  - pairing results are plain Fp12 objects (`===` never works; use `Fp12.eql`),
  - multiply pairing results with `Fp12.mul`,
  - `point.multiply(0n)` throws in v1.9.1 — use the group's `ZERO` point.
- As part of this review a toy `a*b=c` Groth16 proof was prototyped against
  `@noble/curves@1.9.1` using the corrected verification equation: the valid proof
  verified and a single-component tamper was rejected, confirming the plan is
  implementable as written after the corrections.

### 2.2 Week 4 verification equation was wrong/incomplete

The plan said:

```
e(A, B) == e(α, β) * e(public inputs polynomial, γ) * e(C, δ)
```

The Groth16 chapter's actual equation (after its γ/δ separation step) is:

```
e([A]₁, [B]₂) == e([α]₁, [β]₂) · e(X, [γ]₂) · e(C, [δ]₂)
X = Σ_{i=1..ℓ} aᵢ·[Ψᵢ]₁        (public witness terms, not "a polynomial")
```

Week 4 was corrected to this form, and the proof component formulas now include the
chapter's random salts `r`, `s` (the source explicitly says the scheme is not zero
knowledge without them).

### 2.3 Week 3 Day 21-22 taught Groth16 parameters from the wrong chapter

The plan said: "Simulate a trusted setup by generating random α, β, γ, δ, τ."

The linked chapter 2.8 "Trusted Setup" is a **powers-of-tau** setup (choose τ, publish
`[τ⁰G, τ¹G, ...]`, multi-party contributions). It does not introduce Groth16's α, β,
γ, δ — those first appear in chapter 2.10. Week 3 now simulates powers-of-tau and
defers α, β, γ, δ to Week 4.

### 2.4 Week 1 goals contradicted the linked material

Three corrections:

1. **Square roots:** the chapter only gives the simple square-root formula for
   `p ≡ 3 (mod 4)` (`a^((p+1)/4)`) and says Tonelli-Shanks is needed *otherwise*
   (i.e. `p ≡ 1 (mod 4)`). The old wording implied Tonelli-Shanks for `p ≡ 1 (mod 4)`
   without mentioning the simple case. Fixed.
2. **Lagrange's theorem:** the linked group-theory chapter does not cover Lagrange's
   theorem at all, and "prove by brute force" is impossible — brute force can only
   verify examples. It is now labeled optional extra material and reworded as
   verification by exhaustive search.
3. **`@noble/curves` verification of a small custom curve:** `@noble/curves` does not
   expose an arbitrary small-field Weierstrass curve (e.g. `y² = x³ + 3 mod 11`), so
   it cannot verify the Week 1 implementation against the chapter's test vectors
   without advanced use of `abstract/weierstrass`. Week 1 now verifies against the
   chapter's hand-computed points and group laws, and postpones `@noble/curves` to
   Week 2 as intended.

### 2.5 README TypeScript advice was self-contradictory

Old text: "arithmetic operators don't work with `bigint`; use `+`, `-`, `*`, `/`."

`bigint` supports `+ - * / % **`; it just cannot be mixed with `number`, and `/`
truncates. Corrected.

## 3. Medium-priority findings (fixed)

| Finding | Fix |
| --- | --- |
| Week 2 circuit size "(4 wires, 2 multiplication gates)" is misleading. For `out = (a*b)+(c*d)` the R1CS witness is `[1, out, a, b, c, d, v1, v2]` and there are 2 non-constant multiplication constraints; the addition is folded into the O matrix. | Week 2 now states the witness layout and the chapter's "addition is free" rule. |
| `Az * Bz = Cz` is ambiguous (matrix product vs element-wise). The chapter uses the Hadamard product. | Changed to `(A·w) ∘ (B·w) == C·w` and noted the chapter's encrypted-witness pairing step. |
| "2.1 Bilinear Pairings (conceptual)" mislabels the chapter; the actual title is "Bilinear Pairings in Python, Solidity, and the EVM" and it is code-heavy. | Label changed; noted the source uses BN128/py_ecc while the plan translates to BLS12-381. |
| Schwartz-Zippel experiment with small Week 1 fields would show frequent collisions (degree 2 over F₁₁ ≈ 18%) and teach the wrong lesson. | Week 3 now requires a large prime field and compares against `d / |F|`. |
| "Verify divisibility at τ" is mathematically insufficient from one evaluation; the chapter uses the QAP equation with the quotient `h`. | Week 3 now requires polynomial division for `h` and checking `U·V == W + h·t`. |
| Week 4 tamper test should account for Groth16 malleability (negating both A and B still verifies). | Week 4 now says to tamper with exactly one component and documents the expected malleability. |
| README referenced "the five-part series" that does not exist anywhere in the repo or linked pages. | Removed the dangling reference. |

## 4. Project-setup findings (fixed)

1. `@noble/curves@1.9.1` added to `devDependencies`.
2. `package.json` `"main": "index.js"` pointed at a nonexistent root file; build output
   is `dist/index.js`. Set `"main": "dist/index.js"` and added
   `"types": "dist/index.d.ts"`.
3. `pnpm-workspace.yaml` contained a malformed scalar
   `onlyBuiltDependencies: '[''esbuild'']'` instead of a YAML list, and pnpm 10
   emitted a warning that the `pnpm` field in `package.json` is ignored. The setting
   now lives only in `pnpm-workspace.yaml` as a proper list.
4. `pnpm test:run` exited 1 on a fresh checkout because there are no test files yet.
   Added `passWithNoTests: true` to `vitest.config.ts`; tests can fail loudly once real
   tests exist.
5. `pnpm-lock.yaml` was git-ignored, which breaks reproducible installs. Removed it
   from `.gitignore` and refreshed the lockfile (now includes the pinned noble
   version).

Verification after fixes:

- `pnpm install --frozen-lockfile` ✅
- `pnpm build` ✅
- `pnpm test:run` ✅ (no tests yet, exit code 0)
- Pairing identity check against `@noble/curves@1.9.1` ✅

## 5. Remaining recommendations (not yet done — they are the course work)

1. `src/` is still a placeholder (`index.ts` says "Add your code here"). The plan is
   intentionally a study plan, but consider committing starter files (`field.ts`,
   `polynomial.ts`, `r1cs.ts`) so each week has an obvious landing spot.
2. A minimal smoke test should be added to `src/` early in Week 1 so the test runner
   has something real to run.
3. The old `dist/` folder on this machine contains a stale compiled `field.js` from a
   deleted source file; it is git-ignored and harmless, but a local `pnpm build` will
   replace it.
4. Week 2's chapter 2.1 uses BN128/`py_ecc`; the plan correctly chooses BLS12-381 via
   `@noble/curves`, but students should expect to translate curve constants and
   notation rather than copy code verbatim.
5. Consider pinning the remaining dev dependencies exactly (they are already exact in
   `package.json`) and committing the now-untracked `pnpm-lock.yaml`.
