import { useState } from 'react';

import './Estimate.css';

//Components
import Header from '../../Assets/Components/HeaderSolid';
import Footer from '../../Assets/Components/Footer';

//Images
import TudeluIntroVid from '../../Assets/Images/TudeluIntroVid.mp4';

function Estimate() {
    const [measurements, setMeasurements] = useState({ linearFt: null, linearIn: null, verticalFt: null, verticalIn: null })

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        
        setMeasurements((prevData) => ({
            ...prevData,
            [name] : value
        }))
    }

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
        <div className="Estimate-Calculation-Wrapper">
            <div className="Estimate-Calculation">
                <h2>Give your dimensions</h2>
                <div className='Estimate-Calculation-Content Calculation-Linear'>
                    <p>The linear width of my opening is</p>
                    <div className='Estimate-Calculation-Content-Input'>
                        <div className='Estimate-Calculation-Content-Input-ft'>
                            <input type="text" placeholder='0' value={measurements.linearFt} name="linearFt" onChange={handleChange} />
                            <p>ft</p>
                        </div>
                        <div className='Estimate-Calculation-Content-Input-in'>
                            <input type="text" placeholder='0' value={measurements.linearIn} name="linearIn" onChange={handleChange} />
                            <p>in</p>
                        </div>
                    </div>
                </div>
                <div className='Estimate-Calculation-Content Calculation-Vertical'>
                    <p>The vertical height of my opening is</p>
                    <div className='Estimate-Calculation-Content-Input'>
                        <div className='Estimate-Calculation-Content-Input-ft'>
                            <input type="text" placeholder='0' value={measurements.verticalFt} name="verticalFt" onChange={handleChange} />
                            <p>ft</p>
                        </div>
                        <div className='Estimate-Calculation-Content-Input-in'>
                            <input type="text" placeholder='0' value={measurements.verticalIn} name="verticalIn" onChange={handleChange} />
                            <p>in</p>
                        </div>
                    </div>
                </div>
                <button>Get My Estimate</button>
            </div>
            <div className='Estimate-Result'>
                <h2>Closure</h2>
                <div className='Estimate-Result-Content'>
                    <div className='Estimate-Result-Content-Description'>
                        <p>Tudelü: Closure is the easiest way to beautify your space while creating the calm, focused environment you need for any task.</p>
                    </div>
                    <div className='Estimate-Result-Content-Details'>
                        <div>
                            <h3>Closure is</h3>
                            <p>Retractable</p>
                            <p>Occlusive</p>
                            <p>Remote-controlled</p>
                        </div>
                        <div>
                            <h3>Closure is not:</h3>
                            <p>Sound proof</p>
                        </div>
                    </div>
                    <div className='Estimate-Result-Content-Cost'>
                        <h3>$7,000</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}

export default Estimate;
