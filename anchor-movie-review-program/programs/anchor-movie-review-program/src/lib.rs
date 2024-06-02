use anchor_lang::prelude::*;

declare_id!("GzSKZPA4tugmxjiydY7YZT97ApB9KGuPbDaSBJAjjGuM");

#[program]
pub mod anchor_movie_review_program {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
