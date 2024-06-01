
use anchor_lang::AccountDeserialize;
use rand::Rng;
use solana_program::instruction::Instruction;
use solana_program_test::{processor, tokio, BanksClientError, ProgramTest, ProgramTestContext};
use solana_sdk::{
  account::AccountSharedData, pubkey::Pubkey, signature::Keypair, signer::Signer,
  transaction::Transaction,
};

#[tokio::test]
async fn test_program() {
    let mut validator = ProgramTest::default();
    validator.add_program("program", program::ID, processor!(program::entry));
    let alpha = add_account(&mut validator);
    let beta = add_account(&mut validator);
    
    let mut context = validator.start_with_context().await;
}

fn add_account(validator: &mut ProgramTest) -> Keypair {
    let keypair = Keypair::new();
    let account = AccountSharedData::new(1_000_000_000, 0, &solana_sdk::system_program::id());
    validator.add_account(keypair.pubkey(), account.into());
    keypair
  }