"use client";

import { createConfig, http } from "@wagmi/core";
import { polygonAmoy, sepolia } from "@wagmi/core/chains";
import { walletConnect } from "@wagmi/connectors";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ✅ Get your WalletConnect Project ID
const projectId = "7211f5878c247425f4d7edc40df85995";

// ✅ Create Wagmi Config
// export const config = createConfig({
//   chains: [polygonAmoy],
//   connectors: [
//     walletConnect({
//       projectId: projectId,
//       showQrModal : true,
//     }),
//   ],
//   transports: {
//     [polygonAmoy.id]: http(),
//   },
// });

export const config = createConfig({
  chains: [sepolia], // Changed to Sepolia
  connectors: [
    walletConnect({
      projectId: projectId,
      showQrModal: true,
    }),
  ],
  transports: {
    [sepolia.id]: http(
      "https://sepolia.infura.io/v3/44d9231816f147c9813d4d11b579abed"
    ), // Ensure correct Sepolia transport
  },
});

// ✅ Provider Wrapper for Wagmi, RainbowKit, & QueryClient
export function WagmiProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient(); // ✅ Create inside component

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
