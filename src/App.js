import './App.css';


/**
 * Header
 * -Logo
 * -Navitems
 * Body
 * -Search
 * -Restaurant_container
 *   -Restaurant_details
 * Footer
 * -Contact
 * -Links
 * -Address
 * -Copyright
 */


const Header = () => {
  return(
    <div className='header'>
      <div className='logo-container'><img className="logo" src='https://png.pngtree.com/png-vector/20221121/ourmid/pngtree-shopefood-logo-png-image_6472274.png'/></div>
      <div className='navitems'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
           <Header/>
    </div>
  );
}

export default App;
