---
title: Governance
permalink: /dao/governance
---

# Governance

Kyōdō DAO is owned and governed by KYD token holders. Our policy is for the following actions to be executed only after a successful proposal and vote:

* treasury allocation (for funding, liquidity, investment)
* service provider changes
* tokenomics updates (including governance, supply, distribution)

The governance will be implemented gradually and in phases. In the beginning, all decisions will be made by the founders of Kyōdō Protocol, then they will be handled by the community.

::: warning
The governance and voting will take place only after the public sale of KYD token.
:::


### Tools and Design

|                       |                     |
| --------------------- | ------------------- |
| Treasury              | Gnosis Safe         |
| Voting                | Gnosis Snapshot     |
| Governance Token      | KYD                 |
| Gnosis Safe Owner     | Multi-sign (2 of 3) |
| Gnosis Snapshop Owner | Multi-sign (2 of 3) |
| Delegated Voting      | Delegate All        |

### Proposals

There are two types of proposals.

#### Signal Proposal

A Signal Proposal is something that anyone can post in the community. These votes are non-binding, but if the quorum is achieved, the proposal will automatically be upgraded into a binding Core Proposal, as defined below.

Members considering submitting proposals should first flesh out their ideas on community chats for feedbacks, further ideation and to discover whether there is worthy support to move forward. Assuming there is a legitimate interest, a member can post their proposal.

#### Core Proposal

A Core Proposal is something that DAO councils put forward, with options based on Signal Proposals that reached quorum. These votes are binding.

_The idea of signal and core proposals was_ inspired by [_AavegotchiDAO_](https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333)_._

### Voting Parameters

|                     |                |
| ------------------- | -------------- |
| Snapshot Strategy   | 1 KYD = 1 Vote |
| Proposal Validation | basic          |
| Proposal Threshold  | 1,000 KYD      |
| Vote Duration       | Minimum 7 days |
| Vote Threshold      | 1 KYD          |

Notes:

* The above settings are managed by the administrators, who have been nominated by Kyōdō DAO.
* The above settings can be changed by Kyōdō DAO members. It can be discussed and submitted to vote, upon approval it will be changed by the administrators.

### Definitions

#### Snapshot Strategy

Defines the vote weight of each token.

#### Proposal Validation

Proposal validation is a custom function to validate if someone can post a proposal or not. The basic validation takes the voting power and checks if you pass a defined threshold.

#### Proposal Threshold

Proposal Threshold is typically defined as the number of tokens required to create a proposal.&#x20;

#### Vote Duration

The length of time between the voting start date and the voting end date.

**Vote Threshold**

The minimum number vote weight required to vote on a proposal.
