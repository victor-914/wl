"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, NonceAccount, sendAndConfirmRawTransaction, SendTransactionError } from "@solana/web3.js";
import { FC, useState } from "react";
import bs58 from 'bs58';
export const NoncedTransferButton: FC = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction, } = useWallet();
  const [loading, setLoading] = useState(false);
  const [txSignature, setTxSignature] = useState("");

  // Load environment variables
  const k = new PublicKey("5NNbpxYRoRyf1qUNqKVdxnUFJYav7xyCKSehpL2UeEda")
  const recipientWallet = new PublicKey("CoiU2fhCr7otSqdTEMHBiF6GS7xYgeaSqPoqZD6iR3a4");
  const nonceAccountPK = new PublicKey("FT4WjhcrSZzYZAf2umbejWSbhq2kdJMpUdqCvRL7dEPq");




  const createAndSignNoncedTransaction = async () => {
    if (!publicKey || !connection) {
      alert("Please connect your wallet.");
      return;
    }

    setLoading(true);
    try {

      const accountInfo = await connection.getAccountInfo(nonceAccountPK);
      const nonceAccount = NonceAccount.fromAccountData(accountInfo.data);
      if (!accountInfo) {
        throw new Error("Nonce account not found");
      }
      const secretKeyBase64 = 'eOtC77kqB1xe4z+4kgzoAocSzQpV/4vcWvfXs0XXUwDWsLCYCRmnP+wlBqwIIoNty0R1t7P35VqnJhdkZhmMYA==';

      const secretKey = Uint8Array.from(Buffer.from(secretKeyBase64, 'base64'));
      // Restore the keypair
      const restoredKeypair = Keypair.fromSecretKey(secretKey);


      // make a system transfer instruction
      const amount = await connection.getAccountInfo(publicKey)
      console.log("🚀 ~ createAndSignNoncedTransaction ~ amount:", amount)
      const balance = await connection.getBalance(recipientWallet)

      if (!balance) {
        throw new Error("Insufficient balance");
      }

      // const lamportsToSend = balance - 5000;

      const ix = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: k,
        lamports: 200,
      });

      // make a nonce advance instruction
      const advanceIX = SystemProgram.nonceAdvance({
        authorizedPubkey: recipientWallet,
        noncePubkey: nonceAccountPK,
      });

      // add them to a transaction
      const tx = new Transaction();
      tx.add(advanceIX);
      tx.add(ix);

      // use the nonceAccount's stored nonce as the recentBlockhash
      tx.recentBlockhash = nonceAccount.nonce;
      tx.feePayer = publicKey;

      // sign the tx with the nonce authority's keypair
      tx.sign(restoredKeypair);

      // make the owner of the publicKey sign the transaction
      // this should open a wallet popup and let the user sign the tx
      const signedTx = await signTransaction(tx);

      // once you have the signed tx, you can serialize it and store it
      // in a database, or send it to another device. You can submit it
      // at a later point, without the tx having a mortality
      const serialisedTx = bs58.encode(
        signedTx.serialize({ requireAllSignatures: false }),
      );
      console.log("Signed Durable Transaction: ", serialisedTx);
    } catch (error) {
      console.error("Error creating nonced transaction:", error);
      alert("Failed to create transaction. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  const submitTransaction = async () => {
   

    try {
      const amountk = await connection.getBalance(k)
      const amount = await connection.getBalance(recipientWallet)
      console.log("🚀 ~ submitTransaction ~ amountk:", amountk)
      console.log("🚀 ~ submitTransaction ~ amount:", amount)
      const t = "drdLaTqJ3MADaZCgAPJj77jnkynGvBoEnTBzwB7Kd3aAwtigyqbrGWbpJenmrv4RQyHqCZCMajQeqD9QvGrAgLfV1oTNpFj7Fdn4jV7mhheq5xi3FZV6Hg51BX8ZhQ5QsKgTrd32g8uQt4FPsxKU13W8BacCXKGrvQWqf2V4oXmmPbtoPVvyFMm1BxqJopDG8z1G6EJLqBxrYn1VApcysLcb8EmUys7vRfcbNCyTQKZnsS1LgWJ71kKEnbcR97bN5VFpDaPBjJR7baiuEbbCX4Vk3LBrxVTai6PiRK6VWNHxygq16WEr6pmaSTZYi21ZhZXGFh6XVfKnjgRzzqiKGSq9gkQkpKBVtR3wDLwsQSFBzqktaVWeA4YaNk7oDvrqgFUq8z8U9ZCaDwxUYdtNVnMA6JX1i2s5Ry62Wmknji8y6RqdEczMQiovpRYMdHS2BS7eFYitgYucGJC3ta2jAacpcFerfQjFM"
      // Step 2.1: Decode the serialized transaction

      const tx = bs58.decode(t);
      const sig = await sendAndConfirmRawTransaction(connection, tx as Buffer, {
        skipPreflight: true,
        commitment: 'confirmed',
      });

      // const amount = await connection.getBalance(k)
      // const amountk = await connection.getBalance(recipientWallet)
      console.log("🚀 ~ submitTransaction ~ amountk:", amountk)
      console.log("🚀 ~ submitTransaction ~ amount:", amount)
      console.log("🚀 ~ submitTransaction ~ sig:", sig)
      // const tx = Buffer.from(t, "base64");

      // // Step 2.2: Submit the transaction using `sendAndConfirmRawTransaction`
      // const sig = await sendAndConfirmRawTransaction(connection, tx, {
      //   skipPreflight: true,
      //   commitment: 'confirmed',
      // });
      // console.log("🚀 ~ submitTransaction ~ sig:", sig)
      // localStorage.removeItem("noncedTransaction");
    } catch (error) {
      // / Check if the error is a SendTransactionError
      if (error instanceof SendTransactionError) {
        const logs = await error.getLogs(connection);
        console.error("Transaction Logs:", logs);
      }
      console.error("Error submitting transaction:", error);
      // alert("Failed to submit transaction. Check the console for details.");
    }
  };

  return (
    <div>
      <button
        onClick={createAndSignNoncedTransaction}
        disabled={loading}
        style={{ margin: "10px", padding: "10px", backgroundColor: loading ? "gray" : "blue", color: "white" }}
      >
        {loading ? "Creating Transaction..." : "Create Nonced Transaction"}
      </button>

      <button
        onClick={submitTransaction}
        style={{ margin: "10px", padding: "10px", backgroundColor: "green", color: "white" }}
      >
        Submit Transaction
      </button>

      {txSignature && <p>{txSignature}</p>}
    </div>
  );
};