---
title: Implementation
permalink: /zkp/implementation
---

# Implementation

Using Zero-Knowledge Proofs (ZKP) in the context of the Kyōdō Protocol to ensure transaction privacy involves several steps. Here's a high-level overview of how we implement this:

## 1\. **Setup Phase**:

-   **Parameters Generation**: Generate common reference strings (CRS) that both the prover ([Contractor](/the-protocol/roles#contractor)) and verifier ([Professional](/the-protocol/roles#professional)) will use. This is a one-time setup.

## 2\. **Transaction Creation**:

-   **Commitment**: When a [Contractor](/the-protocol/roles#contractor) decides to pay a [Professional](/the-protocol/roles#professional), it creates a commitment of the transaction. This commitment contains the amount and other transaction details but is encrypted and cannot be directly read.

    -   **Proof Generation**: The [Contractor](/the-protocol/roles#contractor) (or the protocol on behalf of the contractor) then generates a zero-knowledge proof asserting the validity of the transaction without revealing the actual transaction details. This proof asserts:

    -   The contractor has enough funds to make the payment.-   The payment details match the commitment.

## 3\. **Transaction Verification**:

-   **Proof Verification**: The protocol (or other network nodes) verifies the zero-knowledge proof. If the proof is valid, the transaction is added to the blockchain. The actual transaction details (like who paid whom and how much) remain private.

## 4\. **Token Distribution**:

-   **Developer's Wallet**: The developer's wallet balance increases by the payment amount, but this increment is not publicly linked to the contractor's payment.

    -   **Community Token Reward**: The protocol also issues community tokens to the professinal as a reward. This issuance also uses ZKP to keep the amount and source private.

## 5\. **Shielded Pools**:

- Future implementations also consider using shielded pools (like Zcash's z-addresses) where funds are pooled together, and when transactions occur, they draw from this pool. This ensures that individual transaction trails are obscured, adding another layer of privacy.

## 6\. **Regular Updates**:

-   The protocol periodically updates the CRS and other parameters to ensure continued security and privacy.

