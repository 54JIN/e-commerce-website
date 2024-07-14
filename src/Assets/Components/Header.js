import './Header.css';

//Images
import Tudelu_Logo from '../Images/Tudelu-Logo.svg';

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
        <button>Free Swatch Kit</button>
      </div>
    </div>
  );
}

export default Header;