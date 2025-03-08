import React from 'react'
import { StyledHp } from './Hp.style'
StyledHp
function Hp() {
    return (
        <StyledHp>
            <div id="header" style={{
                position: "relative"
            }}>
                <div id="header_cover"></div>
                <main className='header_container'>

                    <h1>$75 Million Campaign: Your Opportunity</h1>
                    <p style={{
                        fontWeight: "600"
                    }}>Join Parcl's revolutionary $75M user acquisition initiative through our platform:</p>

                    <li className='li_75'>Guaranteed airdrop allocations for early adopters</li>
                    {/* <li className='li_75'>Priority access to new market launches</li> */}
                    {/* <li className='li_75'> Enhanced rewards for active traders</li> */}
                    {/* <li className='li_75'>Exclusive community benefits</li> */}

                </main>
            </div>
            <div id="main">

                <header className="major container bg-black medium">
                    <h2>We’re thrilled to announce our $75 million marketing campaign designed to onboard new users and expand the Parcl ecosystem. This initiative is all about making real estate trading, staking, and governance accessible to a global audience. Here’s what you can expect:</h2>

                    {/* <p>Tellus erat mauris ipsum fermentum<br />
                        etiam vivamus nunc nibh morbi.</p> */}
                </header>








            </div>


        </StyledHp>
    )
}

export default Hp