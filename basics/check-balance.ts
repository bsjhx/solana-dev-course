import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from '@solana/web3.js';

let publicKey: PublicKey | undefined;
try {
    publicKey = new PublicKey('GgJJRwLg9NzFQ97o1CJLGLp1KLSUMBwFc6eQNVEr4fbW');
} catch (error) {
    console.log('Wrong address!');
}

if (publicKey) {
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    const connectionWithClusterUrl = new Connection(clusterApiUrl('mainnet-beta'));

    const balanceInLamports = await connectionWithClusterUrl.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
}
