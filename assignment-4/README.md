# Assignment 4 — Smart Contracts

## Overview

This project contains two Solidity smart contracts deployed to the Ethereum Sepolia test network using Hardhat and Hardhat Ignition.

## Technologies

- Solidity
- Hardhat 3
- Hardhat Ignition
- TypeScript
- Ethereum Sepolia test network

## Smart Contracts

### 1. Counter

**Source:** `contracts/Counter.sol`

A simple counter contract that stores an unsigned integer.

Functions:
- `inc()` — increments the counter by 1.
- `incBy(uint by)` — increments the counter by a specified positive value.

The deployment module calls `incBy(5)` after deploying the contract.

- **Contract address:** `0x03CFdAfFBaCab89f58b3714A75b9ADeDAB32e772`
- **Transaction:** https://sepolia.etherscan.io/tx/0x22fa33081c61df62df44a66b0e381c8ad1d0eb5602c2d2e3856b29a2a2e67da1
- **Contract on Etherscan:** https://sepolia.etherscan.io/address/0x03CFdAfFBaCab89f58b3714A75b9ADeDAB32e772

### 2. Greeter

**Source:** `contracts/Greeter.sol`

A contract that stores a greeting when it is deployed.

The deployment module passes `Alex` to the constructor, producing the greeting `Hello, Alex!`.

The `greet()` function returns the stored greeting.

- **Contract address:** `0x703Eb0b36C2a075627F3C57b384db6993B71483A`
- **Transaction:** https://sepolia.etherscan.io/tx/0xe62863edd9d2b82701cb0be1c81ff73a2df341802bb33a7b1492093734c38cf3
- **Contract on Etherscan:** https://sepolia.etherscan.io/address/0x703Eb0b36C2a075627F3C57b384db6993B71483A

## Project Structure

- `contracts/` — Solidity smart contracts.
- `ignition/modules/` — Hardhat Ignition deployment modules.
- `scripts/` — scripts for interacting with contracts.
- `test/` — contract tests.
- `hardhat.config.ts` — Hardhat configuration.

## Running the Project

Install dependencies:

```bash
npm install
```

Compile the contracts:

```bash
npx hardhat build
```

Deploy the Counter contract to Sepolia:

```bash
npx hardhat ignition deploy ignition/modules/Counter.ts --network sepolia
```

Deploy the Greeter contract to Sepolia:

```bash
npx hardhat ignition deploy ignition/modules/Greeter.ts --network sepolia
```

Deployment requires a configured Sepolia RPC URL and a funded test account. Sensitive configuration values must be stored securely and must not be committed to GitHub.