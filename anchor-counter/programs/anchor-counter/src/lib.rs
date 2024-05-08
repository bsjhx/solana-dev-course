use anchor_lang::prelude::*;

declare_id!("7JqUMadqgSob1tX9DgK52PNoLLxxAd4N5TPXMZZAkmDX");

#[program]
pub mod anchor_counter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
