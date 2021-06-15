import './App.css';
import './Header.css';
import './stylesheets/Home.css';
import './stylesheets/Main.css';
import './stylesheets/Sidebar.css';
import Header from './Header'
import Home from './components/Home'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState('John')
  let [colorVisible, setColorVisible] = useState('hidden')
  
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
      <Main />
      <Sidebar />
      <Home colorVisible={colorVisible}/>
    </div>
  );
}

export default App;
