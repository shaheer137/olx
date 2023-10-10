import './App.css'
import Router from './config/router'

function App() {
  return (
    <div className="App">
      <header className="olx-header">
        <div className="olx-logo">
          <img src="https://www.brawnglobus.com/wp-content/uploads/2020/06/olx-detail-logo.png" alt="OLX Logo" />
        </div>
        <nav className="olx-nav">
          <ul>
            <li><h3>Home</h3></li>
            <li><h3>Categories</h3></li>
            <li><h3>Sell</h3></li>
            <li><h3>My Account</h3></li>
          </ul>
        </nav>
        <div className="olx-search">
          <input type="text" placeholder="Search for items..." />
          <button>Search</button>
        </div>
      </header>

      <br/>

      <Router />

      <br/>

      <footer className="olx-footer">
        <div className="olx-footer-content">
          <div className="footer-section">
            <h3>About OLX</h3>
            <ul>
              <li><a href="#">About OLX Group</a></li>
              <li><a href="#">OLX Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">OLX for Businesses</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>OLX</h3>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Legal & Privacy information</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="olx-footer-bar">
          &copy; {new Date().getFullYear()} OLX. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default App;
