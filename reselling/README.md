# Ticket Reselling Frontend

This is the frontend application for the Ticket Reselling platform, built with Next.js, React, TypeScript, and Tailwind CSS. It interacts with a smart contract deployed on the Ethereum Sepolia testnet for creating, listing, and buying event tickets.

## Features

- User authentication and profile management
- List, search, and view event tickets
- Create and sell tickets (with NFT/image support)
- Buy tickets with on-chain transactions
- Wallet connection (via wagmi and viem)
- Responsive, modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Access to an Ethereum wallet (e.g., MetaMask) on Sepolia testnet

### Installation

1. Clone the repository and navigate to the `reselling` folder:

   ```sh
   git clone <your-repo-url>
   cd reselling
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:

   - Create a `.env.local` file in the root of `reselling/`.
   - Add your contract address and any other required environment variables:
     ```
     NEXT_CONTRACT_ADDRESS=0xYourContractAddress
     ```

4. (Optional) Update `utils/config.json` and other config files as needed.

### Running the Development Server

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

- `app/` - Main Next.js app directory (pages, components, styles)
- `components/` - Shared UI components
- `contexts/` - React context providers (Auth, Ticket, User)
- `utils/` - Utility functions (contract interaction, IPFS, config)
- `public/` - Static assets (images, icons)
- `tailwind.config.ts` - Tailwind CSS configuration

## Smart Contract Integration

- Uses `wagmi` and `viem` for Ethereum wallet and contract interaction
- Contract ABI and address are configured in `utils/contractUtils.ts`
- Make sure the contract is deployed and the address is set in your environment variables

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## License

This project is licensed under the MIT License.
