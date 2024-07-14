import './Header.css';

//Images
import Tudelu_Logo from '../Images/Tudelu-Logo.svg';
import BurgerIcon from '../Images/BurgerIcon.svg';

function Header() {
  return (
    <div className="Header-Wrapper">
      <div className="Header">
        <img src={Tudelu_Logo} alt="Tudelu logo" />
        <div className='Header-Links'>
            <button>About</button>
            <button>Resources</button>
            <button>Learn</button>
            <button>Contact</button>
        </div>
        <button className='Header-Right-NonBurger'>Free Swatch Kit</button>
        <button className='Header-Right-Burger'><img src={BurgerIcon} alt="Options Icon" /></button>
      </div>
    </div>
  );
}

export default Header;