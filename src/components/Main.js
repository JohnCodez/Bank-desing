import React from 'react'

const Main = () => {
    return (
        <div className='main-window'>
            <h1>History</h1>
            <br/><br/>
            <ul>
                <li><span className='type'>Type</span><span className='price'>Amount($)</span><span className='date' style={{left: '84%'}}>Date(m/d/y)</span></li><hr style={{height: '2px', backgroundColor: 'black'}}/>
                
                <li><span className='type'>Deposit:</span><span className='price'> $100.67 </span><span className='date'>3/10/21</span></li><hr/>
                <li><span className='type'>Withdraw:</span><span className='price'> $300.99 </span><span className='date'>4/14/21</span></li><hr/>
                <li><span className='type'>Withdraw:</span><span className='price'> $420.00 </span><span className='date'>4/20/21</span></li><hr/>
                <li><span className='type'>Deposit:</span><span className='price'> $1,111.00 </span><span className='date'>5/15/21</span></li><hr/>
                <li><span className='type'>Deposit:</span><span className='price'> $5,241 </span><span className='date'>6/20/21</span></li><hr/>
                <li><span className='type'>Small Loan:</span><span className='price'> $1,000,000.00 </span><span className='date'>6/22/21</span></li><hr/>
                
            </ul>
        </div>
    )
}

export default Main
