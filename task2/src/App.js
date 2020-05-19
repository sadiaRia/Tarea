import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
