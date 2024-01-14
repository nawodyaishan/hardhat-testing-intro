# Hardhat Testing Intro

This repository is a demonstration of using Hardhat for smart contract development, testing, and deployment. It uses
Yarn as the package manager and includes a `SimpleStorage` contract as an example.

## Overview

The project demonstrates the use of Hardhat, a popular Ethereum development environment, for compiling, testing,
deploying, and verifying smart contracts. The `SimpleStorage` contract provided in this repo serves as a basic example
for contract development.

## Getting Started

### Prerequisites

- Node.js
- Yarn

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/nawodyaishan/hardhat-testing-intro.git
cd hardhat-testing-intro
yarn install
```

### Configuration

Create a `.env` file at the root of your project and set the following environment variables:

- `INFURA_API_KEY`: Your Infura API key.
- `SEPOLIA_RPC_URL`: The RPC URL for the Sepolia test network.
- `AVALANCHE_FUJI_RPC_URL`: The RPC URL for the Avalanche Fuji C-Chain test network.
- `PRIVATE_KEY`: Your private key for contract deployment.

### Scripts

- `yarn clean`: Clears the build artifacts and cache.
- `yarn compile`: Compiles the smart contracts.
- `yarn test`: Runs the tests for the contracts.
- `yarn deploy:contracts`: Deploys contracts to the specified network.
- `yarn lint`: Runs linters for Solidity and TypeScript files.

## SimpleStorage Contract

`SimpleStorage.sol` is a Solidity smart contract for basic storage and retrieval of a string message. It includes
functions to set and get the message stored in the contract.

## Testing

The `simpleStorage.spec.ts` file contains unit tests for the `SimpleStorage` contract using Hardhat and Chai.

## Deployment

The `deploy.ts` script demonstrates how to deploy the `SimpleStorage` contract to an Ethereum network using Hardhat.

## Hardhat Configuration

`hardhat.config.ts` is configured for various networks and includes settings for Solidity compiler, network
configuration, and more.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

Nawodya Ishan - nawodyain@gmail.com
GitHub: [nawodyaishan](https://github.com/nawodyaishan)
