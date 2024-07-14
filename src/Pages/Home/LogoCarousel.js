import './LogoCarousel.css';

//Images
import BrownLogo from '../../Assets/Images/Accounts/BrownLogo.png'
import FGCULogo from '../../Assets/Images/Accounts/FGCULogo.png'
import HolidayInnLogo from '../../Assets/Images/Accounts/HolidayInnLogo.png'
import LillyLogo from '../../Assets/Images/Accounts/LillyLogo.png'
import MichiganLogo from '../../Assets/Images/Accounts/MichiganLogo.png'
import PrudentialLogo from '../../Assets/Images/Accounts/PrudentialLogo.png'
import UsAirForceLogo from '../../Assets/Images/Accounts/UsAirForceLogo.png'
import UsArmyLogo from '../../Assets/Images/Accounts/UsArmyLogo.png'

function LogoCarousel({ title, description, img }) {
    const images = [BrownLogo, FGCULogo, HolidayInnLogo, LillyLogo, MichiganLogo, PrudentialLogo, UsAirForceLogo, UsArmyLogo]
  return (
    <div className='LogoCarousel-Wrapper'>
        <div className='LogoCarousel-Title'>
            <h2>Some Key Accounts</h2>
        </div>
        <div className="LogoCarousel">
            <div className="LogoCarousel-slide">
                {images.map((img) => (
                    <img src={img} />
                ))}
            </div>
            <div className="LogoCarousel-slide">
                {images.map((img) => (
                    <img src={img} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default LogoCarousel;