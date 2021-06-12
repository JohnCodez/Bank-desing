import './App.css';
import './Header.css';
import './stylesheets/Home.css';
import './stylesheets/Sidebar.css';
import Header from './Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState('John')
  let [colorVisible, setColorVisible] = useState('hidden')
  
  //scales page according to window height
  document.body.style.zoom = `${window.innerHeight/1300*100}%`
  window.addEventListener('resize', () => {
      document.body.style.zoom = `${window.innerHeight/1000*100}%`
  })

  const toggleColorVisible = () => {
    if (colorVisible === 'hidden'){
      setColorVisible(colorVisible = 'visible')
    } else {
      setColorVisible(colorVisible = 'hidden')
    }
  }

  return (
    <div className="App">
      <Header username={username} toggleColorVisible={toggleColorVisible}/>
      <Sidebar />
      <Home colorVisible={colorVisible}/>
    </div>
  );
}

export default App;
