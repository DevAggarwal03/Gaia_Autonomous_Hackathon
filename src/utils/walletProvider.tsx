import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mantleSepoliaTestnet } from 'viem/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { darkTheme } from '@rainbow-me/rainbowkit';
import React from 'react';


const config = getDefaultConfig({
  appName: 'NeoX',
  projectId: '121',
  chains: [mantleSepoliaTestnet],
  ssr: false,
});

const queryClient = new QueryClient();
const WalletProvider = ({children} : {children : React.ReactNode}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({borderRadius: 'small',accentColor: '#7b3fe4',overlayBlur: 'small',})}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WalletProvider;