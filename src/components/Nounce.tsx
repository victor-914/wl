"use client"
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
// import { LAMPORTS_PER_SOL, Keypair, NonceAccount } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
import { base58_to_binary } from "base58-js";
import {
    createMintToInstruction,
    getAssociatedTokenAddress,
    TOKEN_PROGRAM_ID,
    ASSOCIATED_TOKEN_PROGRAM_ID,
    getAccount,
    mintTo,
    getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
// import { bs58 } from "@project-serum/anchor/dist/cjs/utils/bytes";
// import Loading from "./LoadingState";

// 9Mh8zA3r9bJutPrDD7UK8jEPXnxdWkRgcAeDYYEvQRtp = nounce address
//  CoiU2fhCr7otSqdTEMHBiF6GS7xYgeaSqPoqZD6iR3a4 == nounce authority
export const N: FC = () => {
    const [txSig, setTxSig] = useState("");
    // const [tokenAccount, setTokenAccount] = useState("");
    const [balance, setBalance] = useState("");
    const { connection } = useConnection();
    const { publicKey, sendTransaction, signTransaction, signAllTransactions } = useWallet();
    const [loading, setLoading] = useState(false)
    const link = () => {
        return txSig
            ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
            : "";
    };

    


    async function createNonceAccount(
        e: { preventDefault: () => void; }
    ) {
        e.preventDefault()

        try {


            const nonceKeypair = web3.Keypair.generate();
            console.log("🚀 ~ nonceKeypair:", nonceKeypair, nonceKeypair.publicKey.toString(), "pk", nonceKeypair.secretKey, "sk")
            const secretKey = Buffer.from(nonceKeypair.secretKey).toString('base64');
            console.log("🚀 ~ secretKey:", secretKey)
            const tx = new web3.Transaction();

            // the fee payer can be any account
            tx.feePayer = publicKey;

            // to create the nonce account, you can use fetch the recent blockhash
            // or use a nonce from a different, pre-existing nonce account
            tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

         tx.add(
                // create system account with the minimum amount needed for rent exemption.
                // NONCE_ACCOUNT_LENGTH is the space a nonce account takes
                web3.SystemProgram.createAccount({
                    fromPubkey: publicKey,
                    newAccountPubkey: nonceKeypair.publicKey,
                    lamports: 0.0015 * web3.LAMPORTS_PER_SOL,
                    space: web3.NONCE_ACCOUNT_LENGTH,
                    programId: web3.SystemProgram.programId,
                }),
                // initialise nonce with the created nonceKeypair's pubkey as the noncePubkey
                // also specify the authority of the nonce account
                web3.SystemProgram.nonceInitialize({
                    noncePubkey: nonceKeypair.publicKey,
                    authorizedPubkey: publicKey,
                }),
            );

            // sign the transaction with both the nonce keypair and the authority keypair
             tx.sign(nonceKeypair);

            const txS = await signTransaction(tx)
            console.log("🚀 ~ createNonce ~ txS:", txS)
            txS.serialize()


            const transactionSignature = await sendTransaction(
                txS,
                connection,
            )

            console.log("🚀 ~ createNonce ~ transactionSignature:", transactionSignature)
            setTxSig(transactionSignature)
            link()
        } catch (error) {
        console.log("🚀 ~ error:", error)

        }
    }



    return (
        <div style={{
            width: "100%",
            paddingTop: "500px",
            height: "100%",
            backgroundColor: "green"
        }}>
            <br />
            {publicKey ? (
                <form
                    style={
                        {
                            width: "100px",
                            paddingTop: "500px",
                            height: "100px",
                            backgroundColor: "red"
                        }
                    }
                    onSubmit={createNonceAccount}
                >


                    <button type="submit">
                        create nounce account
                    </button>




                </form>
            ) : (
                <span></span>
            )}
            {txSig ? (
                <div>
                    {/* <p>Token Balance: {balance} </p> */}
                    <p>signature: {txSig}</p>
                    <p>View your transaction on </p>
                    <a href={link()}>Solana Explorer</a>
                </div>
            ) : null}
        </div>
    );
};
