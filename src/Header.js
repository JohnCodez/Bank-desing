import React from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import bankLogo from './images/bank-building.png'
import accountPicture from './images/accountPicture.png'

function Header(props) {

    const handleClick = (type) => {
        document.getElementsByClassName('nav-home-box')[0].style.visibility = 'hidden'
        document.getElementsByClassName('nav-dashboard-box')[0].style.visibility = 'hidden'
        document.getElementsByClassName('nav-transactions-box')[0].style.visibility = 'hidden'

        document.getElementsByClassName(type)[0].style.visibility = 'visible'
    }

    return(
        <div className='header'>
            <div className='whole-logo' onClick={props.toggleColorVisible} style={{cursor: 'pointer'}}>
                <img className='bank-logo' src={bankLogo} alt='bank'></img>
                <h1 className='logo-title'>The Greatest Bank</h1>
            </div>
            <BrowserRouter>
                <NavLink onClick={() => handleClick('nav-home-box')} className='navlink' id='nav-home' exact to='/' >Home</NavLink>
                <div className='nav-home-box' id='boxes' style={{visibility: 'visible'}}></div>
                <NavLink onClick={() => handleClick('nav-dashboard-box')} className='navlink' id='nav-dashboard' exact to='/dashboard' >Dashboard</NavLink>
                <div className='nav-dashboard-box' id='boxes' style={{visibility: 'hidden'}}></div>
                <NavLink onClick={() => handleClick('nav-transactions-box')} className='navlink' id='nav-transactions' exact to='/transactions' >Transactions</NavLink>
                <div className='nav-transactions-box' id='boxes' style={{visibility: 'hidden'}}></div>
                <div className='navlink' id='nav-account'>Welcome {props.username}!<NavLink exact to='/account' ><img className='account-picture' src={accountPicture} alt='account'/></NavLink></div>
            </BrowserRouter>
        </div>
    )
}

export default Header