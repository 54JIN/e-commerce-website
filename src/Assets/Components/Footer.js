import './Footer.css';

//Images
import Tudelu_Logo from '../Images/Tudelu-Logo.svg';

function Footer() {
  return (
    <div className="Footer">
        <div className='Footer-Logo'>
            <img src={Tudelu_Logo} alt="Tudelu Logo" />
            <h3>Walls that</h3>
            <h3>move you</h3>
        </div>
        <div className='Footer-Information'>
            <div className='Footer-Information-Quick-Clicks'>
                <h4>Quick Clicks</h4>
                <p>Closure</p>
                <p>Private</p>
                <p>Secluded</p>
                <p>About</p>
                <p>Resources</p>
                <p>Installations</p>
                <p>Measure</p>
                <p>Learn</p>
                <p>Contact</p>
            </div>
            <div className='Footer-Information-Office'>
                <h4>Office</h4>
                <p>100 industrial Avenue Little Ferry, NJ 07643</p>
            </div>
            <div className='Footer-Information-Contact'>
                <h4>Contact</h4>
                <p>718.782.7882</p>
                <p>info@tudelu.com</p>
                <p>Service Call?</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;