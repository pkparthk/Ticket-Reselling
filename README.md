# Ticket Reselling Platform

This repository contains both the backend smart contract and the frontend application for a decentralized ticket reselling platform.

---

## Backend (backendWeb3)

Smart contract backend built with Hardhat (Solidity + TypeScript).

- **contracts/**: Main smart contract (`TicketSale.sol`)
- **scripts/**: Deployment and interaction scripts
- **test/**: Automated contract tests
- **artifacts/**, **typechain-types/**: Generated after compilation
- **hardhat.config.ts**, **package.json**: Config and dependencies

**Setup:**

- Requires Node.js (v16+), npm
- Install: `npm install`
- Compile: `npx hardhat compile`
- Deploy: `npx hardhat run scripts/deploy.ts --network <network>`

---

## Frontend (reselling)

Frontend app built with Next.js, React, TypeScript, and Tailwind CSS. Interacts with the smart contract on Ethereum Sepolia testnet.

- User authentication, profile management
- List/search/view event tickets
- Create/sell tickets (NFT/image support)
- Buy tickets (on-chain)
- Wallet connection (wagmi, viem)
- Responsive UI (Tailwind CSS)

**Setup:**

- Requires Node.js (v18+), npm/yarn, Ethereum wallet (MetaMask) on Sepolia
- `cd reselling`
- Install: `npm install` or `yarn install`
- Configure `.env.local` with `NEXT_CONTRACT_ADDRESS`
- (Optional) Update `utils/config.json`
- Start: `npm run dev` or `yarn dev`

---

For more details, see the README.md files in each subfolder.