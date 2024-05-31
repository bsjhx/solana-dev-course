import * as anchor from "@coral-xyz/anchor"
import { Program } from "@coral-xyz/anchor"
import { expect } from "chai"
import { AnchorCounter } from "../target/types/anchor_counter"
import mlog from 'mocha-logger';

describe("anchor-counter", () => {
  let provider
  let programProvider
  let program
  let counter

  beforeEach(async () => {
    // Configure the client to use the local cluster..
    provider = anchor.AnchorProvider.env()
    anchor.setProvider(provider)

    program = anchor.workspace.AnchorCounter as Program<AnchorCounter>

    programProvider = program.provider as anchor.AnchorProvider;
    counter = anchor.web3.Keypair.generate();

    const tx = await program.methods
      .initialize()
      .accounts({
        counter: counter.publicKey
      })
      .signers([counter])
      .rpc()
  });

  it("Is initialized!", async () => {
    const account = await program.account.counter.fetch(counter.publicKey)
    expect(account.count.toNumber()).to.equal(0)
  })

  it("Incremented the count", async () => {
    const tx = await program.methods
      .increment()
      .accounts({ counter: counter.publicKey, user: provider.wallet.publicKey })
      .rpc()

    const account = await program.account.counter.fetch(counter.publicKey)
    expect(account.count.toNumber()).to.equal(1)
  })

  it("Incremented the count by value", async () => {
    const tx = await program.methods
      .incrementByValue(new anchor.BN(10))
      .accounts({ counter: counter.publicKey, user: provider.wallet.publicKey })
      .rpc()

    const account = await program.account.counter.fetch(counter.publicKey)
    expect(account.count.toNumber()).to.equal(10)
  })
})
