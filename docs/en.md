# Kyodo Protocol

Sustainable Business Model for Service Communities and DAOs

## Context

Freelance professionals, solo entrepreneurs, and job applicants often struggle to find clients and quality job opportunities and often have trouble proving their knowledge and experience in the market.

The traditional resume is already an obsolete tool.

Gone are the days when companies stored static documents with the profile of each candidate.

Companies, in turn, struggle to verify whether candidates truly possess the necessary skills and how relevant their previous work experiences were.

Beyond the issue of the resume, we also notice a challenge in matchmaking between companies and professionals. Often, the ideal person does not appear on a company's radar, and companies end up taking a long time to find the professional they need in the timeframe they require.

In sectors such as software development, where the demand for professionals is much higher than the supply of talent, the problem worsens.

A solution to this problem is communities.

A community is a group of people who share similar interests, values, goals, or geographic locations. They interact and collaborate with each other, creating social bonds and establishing a collective identity. The community provides a sense of belonging, mutual support, and an environment where individuals can engage and actively participate.

Communities represent oases of professionals for companies wishing to find talent. They bring together many professionals from the same field, making it easier to search for the right professional. For professionals, communities offer knowledge, education, a space for exchange, and personal and professional growth. They are also a channel for finding work.

Communities are generally created by enthusiastic professionals who dedicate their time to their passion and are looking for financial return, social recognition, and reputation.

However, these professionals do not always consider a viable business model that can financially support the community's activities and generate enough incentives to keep members active. Creating and maintaining a business model for communities is a massive challenge.

Within this scenario of hiring companies, professionals, and communities, the solution **Kyodo Protocol** emerges.

## What it is

The **Kyodo Protocol** is a protocol focused on the relationship between communities, employers, and professionals.

The protocol offers a software infrastructure that solves companies' problem in hiring professionals, generates benefits and proof of experience for the hired professionals, and enables a sustainable business model for communities.

Everything is done through the processing of payments made by the company for the work performed by the professionals hired in the community.

The protocol functions as a payment gateway that distributes the money received, issues and distributes tokens that represent community benefits to the professional, and records the skills of the professionals involved in providing service as proof of their resume.

## How it works

**Community** leaders decide to implement the Protocol so that all members can benefit and the **Community** has a source of revenue. Initially, the leaders determine the **Community Fee** , a percentage that will be charged on the amount of all services provided by participating members. This decision can be delegated to the members later on. Additionally, the **Community Token** will be minted, a unique token that will be distributed to participating members. This token can be used in gamification mechanisms or community governance, at the discretion of each one.

From this moment on, community members can use the tool and the protocol to receive compensation for all services rendered to their clients. The use of the protocol is not mandatory. The protocol provides a contract management and billing tool for the member to use.

To participate in the protocol, the member will need to go through a KYC (Know Your Customer) and AML (Anti Money Laundering) process and create a verified account. In this account, the member will register their crypto wallets from the networks supported by the Protocol.

The member then registers a **Contract** in the protocol that represents the service provision they negotiated with a client. This **Contract** will reference the **Contractor** , the description of the services, the agreed amount, the type of payment (single, installment, or recurring) and the Skills involved in this service provision, with a weight for each **Skill**. For example, if it is a contract to be a backend software developer in the Javascript language, they will be able to choose the Javascript skill with a weight of 100%, or they can choose two or more skills (e.g.: Javascript and Node.js), giving a weight of 50% for each one. All this information will be useful for the hiring process and future work and will be explained further below.

After having an active contract, approved by the company to execute the service, when billing their services to the hiring company, the member issues an invoice against their client from the **Billing Tool**.

The invoice includes the charge for the services performed and the community fee. Suppose the **Community Fee** is 5%, then a salary of $10,000 will generate an invoice for $10,500 for the company to pay. That's $10,000 for the Professional and $500 for the Community.

In the description of the services, the **Skills** defined by the member will be highlighted so that the company can validate and confirm that the skills are really present in the service delivery.

The payment data will inform the payment address in cryptocurrencies on the network chosen by the member at the time of invoice issuance. The network to be used is an agreement between the professional and the hiring company. The payment must necessarily be made in cryptocurrencies because of the benefits generated for the **Professional** and the **Community** , which will be explained below.

Upon receiving the invoice, the company makes the Payment to the informed address, an address generated by the **Protocol** that will process the **Payment**.

Upon receiving a **Payment** , the **Protocol** will automatically know who the money comes from, under which Contract this payment is relative, who is the hired Professional, and under which Community this contract is being governed.

Immediately upon receiving the money, the protocol will then split the payment:

1. Transfer the value of the community percentage to the treasury, which in general will be a multi-sign wallet
2. Pay for the use of the protocol by transferring 0.5% to the protocol treasury
3. Transfer the remainder to the member who performed the service
4. Compute the amount of money received distributed by the Skills according to their weight in the Contract. For example, if the contract has two skills with a weight of 50% each, and the payment was $10K, each skill will have a nominal index of 5k.
5. Distribute 50% of the received nominal value in Community Tokens. For example, if the payment is $10,000, 5,000 community tokens will be sent to the member.

The Skills Index record will be used by the member as a resume proof. At any time, the professional can prove that they worked effectively with certain technologies, tools, or processes because this proof is related to how much money they actually received for performing a service. The higher the index, the longer the professional has worked with that skill or the more senior they are, considering that seniority is directly related to the price that the professional can charge in the market. Ultimately, the more money received, the more experience the person has.

The member can mint an NFT that will be updated with the weight of that Skill and the community can create a ranking of professionals by skills, which will make it easier for companies to find talents as they need them. This NFT is Soulbound, i.e., it cannot be transferred between Wallets. The community will have a revenue stored in its treasury because of the **Community Fee** and can use the resources to offer benefits to its members, such as:

- Benefit club with discounts at establishments of interest to the community
- Active search for hiring companies to be customers hiring the members,
- Training, courses and free education for the entire community or for members participating in the protocol.

The community token can be used as an access gateway for certain areas or services provided to the community and/or be used as a governance token if the community is interested in becoming a DAO (Decentralized Autonomous Organization).

In the case of a DAO, the member will be very interested in using the Protocol, because in addition to the benefits of the Community, the resume proof, they may also have ownership of the business with a vote on decisions related to the money received from the Community Fee generated with the work of other members. The more they work using the Protocol, the larger part of the business they will own and the "more owner" they will be of the DAO.

The DAO token may have liquidity in the secondary market and will appreciate as more Professionals join the community and choose to have their remunerations received through the Protocol, as this will represent more fees and greater value in the **Community Treasury**.

## Definitions

### Entities

**Community** : The community is an organization that brings together Professionals, generally from the same field of activity, generates benefits for members and provides recruitment, selection service for **Contractors** who wish to recruit community members.

**Member** : An individual, of legal age, who is part of the community and is legally capable of performing service for others.

**Professional** : A company, usually one-person, that provides the service performed by the person who is a member of the **Community**. Every member who wants to use the protocol needs to have a company. **Professionals** need to have an Identity to use the protocol.

**Contractor** : A company that demands the services of the **Professional** and uses the Community to find the professionals and hire them. **Contractors** need to have an Identity to use the protocol.

### Concepts

**Protocol** : Set of software that runs in a decentralized way through smart contracts on supported networks. The **Protocol** is only the part of the system that runs on-chain.

**Tools** : Set of software that runs centrally on servers hosted by the company that provides the **Protocol** service. These systems can be replaced by any other developed by third parties or by the community itself.

**Identity** : A unique record that is saved in the protocol and represents a company, whether it's a **Professional** or a **Contractor** , after undergoing a process of KYC (Know Your Client) and AML (Anti Money Laundering). Each **Professional** and **Contractor** can have only one Identity in the system. The Identity is associated with some document of legal value in the country where the company's document is registered. Natural persons cannot create Identities in the protocol.

**Wallet** : The public address of the wallet on the blockchain of one of the networks used by the Protocol. An Identity can have multiple Wallets associated with its registration.

**Treasury** : The community's wallet where the money related to the Community Fee goes.

### Architecture

**Community Fee** : Percentage of the value of the services provided by the Professional that is retained for the **Treasury** so that the **Community** can use it for the benefit of all **Members**.

**Community Token** : Cryptocurrency that is given to the **Professional** with each **Payment** received and can be used as a gateway to access certain areas or services provided to the community or can be used as a governance token if the community has an interest in becoming a DAO (Decentralized Autonomous Organization).

**Contract** : Service provision relationship between the Professional and the Contractor. When using the protocol, one of the two creates the **Contract** so that payments can be made from there.

**Skill** : Record of a skill or knowledge required by the provision of the service that is associated with the **Contract**. This record will have a number associated with it that will represent the total financial amount received by Contracts that required a certain Skill. Badges will be created from the Skills.

**Invoice** : Commercial document that records the details of a Payment related to the Contract established between the Contractor and the Professional. The invoice includes the value of the services performed, the Community Fee, the description of the services, the associated Skills, and the payment information.

**Payment** : Transfer made by the **Contractor** to the **Protocol** for the payment of an Invoice. The Protocol takes care of making the split, transferring the value of the **Community** Fee to the Treasury, the Protocol Fee to the Protocol's wallet, and the remainder to the **Professional**. In addition to transferring the **Community Tokens** to the **Professional**.

**Badges** : Proof of experience that the Professional can mint in the form of an NFT that has the record of the Skills and their indices. The Badge is only a way to prove the Skills.

## Summarized Dynamics

The **Community** implements the **Protocol**.

**Contractors** can recruit in the **Community**.

**Professionals** receive **Community Tokens** and **Badge** NFTs as proof of skills.

The **Community** uses the **Treasury** accumulated with the **Community Fee** to offer benefits to **Professionals**.

The **Contractor** saves on human resources benefits.

If the **Community** is a DAO, the **Professional** becomes the owner of the **Payment Gateway** they chose to use to receive their payments.

## Benefits

### For the Community

The **Community** gains a sustainable business model by offering the possibility of its members being hired by third parties. The business model consists of maintaining an active engaged community, offering the market the service of optimized recruitment and selection, using the money raised to offer benefits to Members and to the hired Professionals.

- Sustainable business model
- Recurring revenue source
- Mechanism to attract professionals from the same area of activity
- Engagement of members by offering work and employment
- Sustainability and growth

### For Professionals

The **Professional** has many advantages in choosing to receive their remuneration through the **Protocol**. The person gains benefits offered by the community and in the case of DAOs, also gains business ownership. The idea is that the **Community** Fee is lower than the fees employed by market gateways, so it will be a negotiation with few barriers for the Professional to have their **Contractor** pay through the **Protocol**.

- Community benefits
- Proof of resume
- Badges of their skills with weight based on the financial value received
- Billing tool
- In the case of DAOs:
  - Community ownership
  - Governance over the Treasury that holds the Community Fees (it's like being the owner of PayPal)

### For Contractors

Contractors benefit from their process of hiring services from freelancers or solo entrepreneurs. The **Protocol** facilitates the recruitment and selection of talents from a **Community** that gathers Professionals from the same field of work. It is possible to find the ideal person in one place.

- Community Benefits for the hired
- Proof of hiring
- Payment gateway
- Professional search and selection tool
- Management and history of hirings