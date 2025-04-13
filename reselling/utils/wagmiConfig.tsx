"use client";

import { createConfig, http } from "@wagmi/core";
import { polygonAmoy } from "@wagmi/core/chains";
import { walletConnect } from "@wagmi/connectors";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ✅ Get your WalletConnect Project ID
const projectId = "7211f5878c247425f4d7edc40df85995";

// ✅ Create Wagmi Config
export const config = createConfig({
  chains: [polygonAmoy],
  connectors: [
    walletConnect({
      projectId: projectId,
    }),
  ],
  transports: {
    [polygonAmoy.id]: http(),
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
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={[polygonAmoy]}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
