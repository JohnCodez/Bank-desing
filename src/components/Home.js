import React, { Component } from 'react'

class Home extends Component {
    state = {
        bgColor:'#e7e7e7',
        hColor1: '#ffffff',
        hColor2: '#ffffff',
        color: '#000000'
    }

    changeColors = (e, number) => {
        if(number === 1){
            this.setState({bgColor: e.target.value})
            document.body.style.backgroundColor = e.target.value
            document.getElementsByClassName('nav-home-box')[0].style.backgroundColor = e.target.value
        document.getElementsByClassName('nav-dashboard-box')[0].style.backgroundColor = e.target.value
        document.getElementsByClassName('nav-transactions-box')[0].style.backgroundColor = e.target.value
        } else if (number === 2) {
            this.setState({hColor1: e.target.value})
            document.getElementsByClassName('header')[0].style.background = `linear-gradient(0deg, ${e.target.value} 0%, ${this.state.hColor2} 150%)`
            document.getElementsByClassName('sidebar')[0].style.backgroundColor = e.target.value
            document.getElementsByClassName('main-window')[0].style.backgroundColor = e.target.value
        } else if(number === 3){
            this.setState({hColor2: e.target.value})
            document.getElementsByClassName('header')[0].style.background = `linear-gradient(0deg, ${this.state.hColor1} 0%, ${e.target.value} 150%)`
        } else {
            this.setState({color: e.target.value})
            document.getElementsByClassName('navlink')[0].style.color = e.target.value
            document.getElementsByClassName('navlink')[1].style.color = e.target.value
            document.getElementsByClassName('navlink')[2].style.color = e.target.value
            document.getElementsByClassName('navlink')[3].style.color = e.target.value
        }
    }


    render() {
        return (
            <div className='home'>
                <div className='colors' style={{visibility: this.props.colorVisible}}>
                    <input className='color-pickers' id='custom-theme1' type='color' onChange={(e) => this.changeColors(e, 1)} value={this.state.bgColor}></input>
                    <input className='color-pickers' id='custom-theme2' type='color' onChange={(e) => this.changeColors(e, 2)} value={this.state.hColor1}></input>
                    <input className='color-pickers' id='custom-theme3' type='color' onChange={(e) => this.changeColors(e, 3)} value={this.state.hColor2}></input>
                    <input className='color-pickers' id='custom-theme4' type='color' onChange={(e) => this.changeColors(e, 4)} value={this.state.color}></input>
                </div>
                <div className='main'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Home
