---
title: Governance
permalink: /dao/governance
---

# Governance

Kyōdō DAO is collectively owned and operated by holders of the KYD token. Our established policy states that certain actions can only be taken following a successful proposal and subsequent voting process. These actions include:

* Allocation of treasury resources for funding, liquidity, and investment purposes
* Changes in service providers
* Updates to tokenomics, encompassing governance, supply, and distribution facets

The implementation of our governance model will occur gradually and in phases. Initially, all decisions will be made by the founders of the Kyōdō Protocol. Over time, responsibility for decision-making will pass into the hands of the community.

::: warning
Governance and voting will take place only after the public sale of the KYD token.
:::


## Tools and Design

|                       |                     |
| --------------------- | ------------------- |
| Treasury              | Gnosis Safe         |
| Voting                | Gnosis Snapshot     |
| Governance Token      | KYD                 |
| Gnosis Safe Owner     | Multi-signature (2 of 3) |
| Gnosis Snapshot Owner | Multi-signature (2 of 3) |
| Delegated Voting      | Delegate All        |

## Proposals

Proposals within the Kyōdō DAO can take one of two forms:

### Signal Proposal

Any member of the community can submit a Signal Proposal. While these proposals are not binding, if they meet a specific level of support or 'quorum' they will automatically be upgraded to a Core Proposal which, as shown below, is binding.

Community members who are considering submitting proposals should initially seek feedback on their ideas through community chats. This process allows the member to receive feedback, expand their ideas further, and assess whether the proposal can garner adequate support to move forward. If the proposal appears to be of legitimate interest within the community, the member can then officially submit it.

### Core Proposal

A Core Proposal is an official proposal submitted by the DAO councils. Options presented in a Core Proposal are based on Signal Proposals that have reached a quorum. Votes on these proposals are binding.

*The concept of Signal and Core Proposals was* inspired by *the model adopted by [AavegotchiDAO](https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333)*.

## Voting Parameters

|                     |                |
| ------------------- | -------------- |
| Snapshot Strategy   | 1 KYD = 1 Vote |
| Proposal Validation | basic          |
| Proposal Threshold  | 1,000 KYD      |
| Vote Duration       | Minimum 7 days |
| Vote Threshold      | 1 KYD          |

Notes:

* The settings stated above are managed by administrators, who have been appointed by the Kyōdō DAO.
* The said settings can be modified by Kyōdō DAO members. Any alterations can be discussed and submitted for a vote. If approved, the changes will be implemented by the administrators.

## Definitions

### Snapshot Strategy

This refers to the method used to determine the voting weight of each token.

### Proposal Validation

This is a custom function used to validate if someone is eligible to submit a proposal. Basic validation verifies that the member's voting power meets a defined threshold.

### Proposal Threshold

Typically, this refers to the number of tokens required to create a proposal.&#x20;

### Vote Duration

This refers to the period of time from initiation to completion of the voting process.

## Vote Threshold

Refers to the minimum vote weight threshold required to participate in a proposal.
