import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <ul className='sidebar-list'>
                    <li className='sidebar-items'>History</li><hr/>
                    <li className='sidebar-items'>Deposit</li><hr/>
                    <li className='sidebar-items'>Withdraw</li><hr/>
                    <li className='sidebar-items'>Loans</li><hr/>
                    <li className='sidebar-items'>Details</li><hr/>
                    <li className='sidebar-items'>Account</li><hr/>
                </ul>
            </div>
        )
    }
}
