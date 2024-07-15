import './Home.css';

//Components
import Header from '../../Assets/Components/Header'
import Highlights from './Highlights'
import Carousel from './Carousel2';
import Products from './Products'
import Accolades from './Accolades'
import LogoCarousel from './LogoCarousel';
import Footer from '../../Assets/Components/Footer'

//Imported Images
import TudeluIntroVid from '../../Assets/Images/TudeluIntroVid.mp4'
// import Product from '../../Assets/Images/Product.png'

function Home() {
  return (
    <div className="Home">
        <div className='Home-Welcome'>
            <div className='Home-Welcome-Video'>
                <video src={TudeluIntroVid} autoPlay loop muted disablePictureInPicture />
            </div>
            <div className='Home-Welcome-Content'>
                <Header />
                <div className='Home-Welcome-Content-Title-Section'>
                    <div className='Home-Welcome-Content-Title-Section-Monitor'>
                        <h1>Walls that</h1>
                        <h1>move you</h1>
                    </div>
                    <div className='Home-Welcome-Content-Title-Section-Mobile'>
                        <h1>Walls that move you</h1>
                    </div>
                    <p>Let the magic of Tudelü transport you to whatever environment you need next.</p>
                    <div className='Home-Welcome-Content-Title-Section-Buttons'>
                        <button className='Home-Welcome-Content-Title-Section-Estimate-Button'>Instant Estimate</button>
                        <button className='Home-Welcome-Content-Title-Section-LearnMore-Button'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <Highlights />
        <div className='Carousel-Container'>
            <div className='Carousel-Container-Title'>
                <h2>Change spaces. Not Places.</h2>
                <p>Designed for everything from residential to industrial.</p>
            </div>
            <Carousel Contents={[{video: TudeluIntroVid, title: "Closure", subTitle1: "Lock yourself away.", subTitle2: "Unlock your focus", description: "A simple, sturdy wall designed to customize spaces of all shapes and sizes-from a cluttered kitchen to a messy art space.", link:""}, {video: TudeluIntroVid, title: "Private", subTitle1: "Customize your space.", subTitle2: "Crank up your decor.", description: "Create private, quite chamers with sophisticated 36 STC sound-proofing technology that doesn't require any construction.", link:""}, {video: TudeluIntroVid, title: "Secluded", subTitle1: "Protect your ears.", subTitle2: "And corporate secrets.", description: "Soundproof any space, from the ballroom to the bedroom-with a retractable wall that's sturdier and more soundproof than a permanent one.", link:""}]} />
        </div>
        <Products Items={[{title: 'Closure'},{title: 'Private'},{title: 'Secluded'}]} />
        <Accolades />
        <LogoCarousel />
        <div className='Home-Banner'>
            <div className='Home-Banner-Content'>
                <h2>Got 30 Seconds?</h2>
                <button>Instant Estimate</button>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Home;