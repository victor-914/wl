import { FC, ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

//   const endpoint = "https://mainnet.helius-rpc.com/?api-key=12d8ed50-438a-4211-a6a5-15bee8b62507"
//   web3.clusterApiUrl("mainnet-beta");

  const endpoint = web3.clusterApiUrl("devnet")

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
