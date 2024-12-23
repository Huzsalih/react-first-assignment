
  import React from 'react';
import './App.css';

function Header() {
  return <header>
  <h1 className='heading'>Company name</h1>
  <nav className='navbar'>
      <ul className='nav-list'>
          <li className='nav-item'><a href="#">Home</a></li>
          <li className='nav-item'><a href="#">Support</a></li>
          <li className='nav-item'><a href="#">Enterprise</a></li>
          <li className='nav-item'><a href="#">Feature</a></li>
      </ul>
  </nav>
  <hr></hr>
  </header>;
}

function Body() {
  return (
    <main>
      <h1>Features</h1>
    </main>
  );
}

function Footer() {
  return    <footer>
  <hr></hr>
  <div className="Footers">
      <div className="grid-item">
<h3>Features</h3>
<ul>
<li className='lists'>Cool Stuff</li>
<li className='lists'>Random Features</li>
<li className='lists'>Team Features</li>
</ul>
</div>
<div className="grid-item">
<h3>Resource</h3>
<ul>
<li className='lists'>Resource</li>
<li className='lists'>Resource name</li>
</ul>
</div>
<div className="grid-item">
<h3>About</h3>
<ul>
<li className='lists'>Team</li>
<li className='lists'>Location</li>
</ul>
</div>
</div>
</footer>
}

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

