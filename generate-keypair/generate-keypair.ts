import { Keypair } from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = Keypair.generate();
console.log(keypair.publicKey.toBase58());
console.log(keypair.secretKey);

console.log(`✅ Generated keypair!`);

const keypairLoaded = getKeypairFromEnvironment("SECRET_KEY");
console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file! (public key: ${keypairLoaded.publicKey.toBase58()})`
);