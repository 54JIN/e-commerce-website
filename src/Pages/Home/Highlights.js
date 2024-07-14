import './Highlights.css';

//Import Component
import Pannel from './Pannel'

//Import Images
import MuteIcon from '../../Assets/Images/MuteIcon.svg'
import WireIcon from '../../Assets/Images/WireIcon.svg'
import CompactIcon from '../../Assets/Images/CompactIcon.svg'
import BudgetIcon from '../../Assets/Images/BudgetIcon.svg'

function Highlights() {
  return (
    <div className="Highlights">
        <div className='Highlights-Title-Monitor'>
            <h2>Give your space a plug-and-play partition.</h2>
            <p>Our gorgeous, sturdy, retractable walls are there when you need them, and invisible when you don’t. No construction, retrofitting, or wiring required.</p>
        </div>
        <div className='Highlights-Title-Mobile'>
            <h2>Plug & Play Partition</h2>
            <p>Our gorgeous, sturdy, retractable walls are there when you need them, and invisible when you don’t. No construction, retrofitting, or wiring required.</p>
        </div>
        <div className='Highlights-Panels-Monitor'>
          <Pannel title="Soundproof" description="Custom 36-48 STC sound proofing at the touch of a button" img={MuteIcon} />
          <Pannel title="Wire-Free" description="Mount-and-go wall switch controlled by remote" img={WireIcon} />
          <Pannel title="Compact" description="Tiny system footprint with little to no construction requirements" img={CompactIcon} />
          <Pannel title="Budget-Friendly" description="Upfront, all-inclusive pricing with no hidden fees or surprise coasts" img={BudgetIcon} />    
        </div>
        <div className='Highlights-Panels-Mobile'>
          <div className='Highlights-Panels-Container'>
              <div className='Highlights-Panels-Container-Carousel'>
                <Pannel title="Soundproof" description="Custom 36-48 STC sound proofing at the touch of a button" img={MuteIcon} />
                <Pannel title="Wire-Free" description="Mount-and-go wall switch controlled by remote" img={WireIcon} />
                <Pannel title="Compact" description="Tiny system footprint with little to no construction requirements" img={CompactIcon} />
                <Pannel title="Budget-Friendly" description="Upfront, all-inclusive pricing with no hidden fees or surprise coasts" img={BudgetIcon} />
              </div>
          </div>
        </div>
    </div>
  );
}

export default Highlights;