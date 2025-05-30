# Ticket Reselling Smart Contract Backend

This project contains the backend smart contract and scripts for a decentralized ticket reselling platform. It is built using [Hardhat](https://hardhat.org/) and written in Solidity and TypeScript.

## Project Structure

- `contracts/` - Contains the main smart contract (`TicketSale.sol`).
- `scripts/` - Deployment and interaction scripts.
- `test/` - Automated tests for the smart contract.
- `artifacts/` and `typechain-types/` - Generated files after compilation.
- `hardhat.config.ts` - Hardhat configuration.
- `package.json` - Project dependencies and scripts.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Compile the smart contracts:
   ```bash
   npx hardhat compile
   ```

### Deployment

To deploy the contract to a local Hardhat network:

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

To deploy to a testnet (e.g., Sepolia), configure your network and private key in `hardhat.config.ts` and run:

```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

### Testing

Run the test suite with:

```bash
npx hardhat test
```

## Configuration

- Edit `hardhat.config.ts` to set up networks and environment variables.
- Contract artifacts (ABI, bytecode) are generated in the `artifacts/` directory after compilation.

## Scripts

- `scripts/finalDeploy.ts` - Deploys the contract. for final


## License

MIT