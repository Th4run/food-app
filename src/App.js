import './App.css';


/**
 * Header ~C~
 * -Logo
 * -Navitems
 * Body
 * -Search
 * -RestaurantCard
 *   -img
 *   -Names of Res ,star ratting,cuisine,etc,time
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

const Body = () => {
  return(
    <div className='body'>
         <div className='search'>Search</div>
         <div className='res-container'>
          <Res_card 
          res_name="Shree AnnaPoorna"
          rating="4.5 - 17 mins"
          cuisine="Indian, South Indian, North Indian, Chinese, Desserts"
          imgsrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vxcwz0jbchbxnuh474zr"
          />
          <Res_card 
          res_name="Kovai Kitchen"
          rating="3.6 - 29 mins"
          cuisine="Indian, Continental"
          imgsrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bccdmgcd8yeckqzain5k"
          />
          <Res_card 
          res_name="Hotel Kannappa"
          rating="4.2 - 23 mins"
          cuisine="Biriyani, Chettinad, South Indian"
          imgsrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gqqdwbbzjypkq8dpflc4"
          />
          <Res_card 
          res_name="Haribhavanam"
          rating="4.2 - 25 mins"
          cuisine="Indian"
          imgsrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lhs40n0t4kzoihrsbgag"
          />
          <Res_card 
          res_name="Aasife Biriyani"
          rating="4.1 - 23 mins"
          cuisine="Biriyani, South Indian, North Indian"
          imgsrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4c60f16916c90b6249c1e27f28bbb8e4"
          />
          <Res_card 
          res_name="Domino's Pizza"
          rating="4 - 25 mins"
          cuisine="Pizzas, Italian, Pastas, Desserts"
          imgsrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nmuvxvvmtaxei2ifckwj"
          />
          
         </div>
    </div>
  );
}

const Res_card = (props) => {
  return(
    <div className='Restaurant_container'>
      <div className='Res_card_img_container'>
        <img className="Res_card_img"
        src={props.imgsrc}/>
      </div>
      <div className='Res_card_details'>
        <h3 className='Res_card_title'>{props.res_name}</h3>
        <div className='star_rate'>
        <img className='star_rate_icon' width="22" height="22" src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Star-round-icons-others-inmotus-design-8.png" alt="external-Star-round-icons-others-inmotus-design-8"/>
        <p className='star_rate_name'>{props.rating}</p>
        </div>
        <p className='cussine'>{props.cuisine}</p>
      </div>
    </div>
    );  
}

function App() {
  return (
    <div className='App'>
           <Header/>
           <Body/>
    </div>
  );
}

export default App;
