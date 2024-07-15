import { Link } from 'react-router-dom';

import './Header.css';

//Images
import Tudelu_Logo from '../Images/Tudelu-Logo-White.svg';
import BurgerIcon from '../Images/BurgerIconWhite.svg';

function HeaderDay() {
  return (
    <div className="Header-Wrapper">
      <div className="Header Header-Solid">
        <Link to="/e-commerce-website"><img src={Tudelu_Logo} alt="Tudelu logo" /></Link>
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

export default HeaderDay;