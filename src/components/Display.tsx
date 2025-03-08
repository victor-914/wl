import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";

export const BalanceDisplay: FC = () => {
    const [balance, setBalance] = useState(0);
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {
        if (!connection || !publicKey) {
            return;
        }

        try {


            const conn = async () => {
                await connection.getAccountInfo(publicKey).then((info) => {
                    console.log("🚀 ~ awaitconnection.getAccountInfo ~ info:", info)
                    setBalance(info?.lamports);
                });
                console.log("🚀 ~ balance:", balance)

            }

            conn()


        } catch (error) {
            console.log("🚀 ~ useEffect ~ error:", error)

        }




    }, [connection, publicKey]);

    return (
        <div>
            <p>{publicKey ? `SOL Balance: ${balance / LAMPORTS_PER_SOL}` : ""}</p>
        </div>
    );
};
