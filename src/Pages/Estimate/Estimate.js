import './Estimate.css';

//Components
import Header from '../../Assets/Components/HeaderSolid';

//Images
import TudeluIntroVid from '../../Assets/Images/TudeluIntroVid.mp4';

function Estimate() {
  return (
    <div className="Estimate">
        <Header />
        <div className="Estimate-Welcome">
            <div className="Estimate-Welcome-Title">
                <h1>Lets get your</h1>
                <h1>Instant Estimate</h1>
                <p>Take two easy measurements, click through a few simple choices, and get a free instant estimate for your custom Tudelü wall.</p>
            </div>
            <div className="Estimate-Welcome-Graphics">
                <video src={TudeluIntroVid} autoPlay loop muted disablePictureInPicture />
            </div>
        </div>
    </div>
  );
}

export default Estimate;
