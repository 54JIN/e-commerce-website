import './Accolades.css';

//Images
import AccoladeImg1 from '../../Assets/Images/AccoladeImg1.webp'
import AccoladeImg2 from '../../Assets/Images/AccoladeImg2.svg'

function Accolades() {
  return (
    <div className="Accolades">
        <div className='Accolades-Title'>
            <h6>Accolades</h6>
            <p>Tudelü wins <b>patents</b>, <b>awards</b>, and <b>hearts</b>.</p>
        </div>
        <div className='Accolades-Content'>
            <div className='Accolades-Content-1'>
                <img src={AccoladeImg1} alt="United States Patent And Trademark Office" />
                <p>Tudelü holds a number of United States patents across both utility and design.</p>
            </div>
            <div className='Accolades-Content-2'>
                <img src={AccoladeImg2} alt="Design Awards Logo" />
                <p>For nearly a decade, Tudelü has seen a winning streak of design awards.</p>
            </div>
        </div>
    </div>
  );
}

export default Accolades;