import { useEffect, useState } from 'react';

import './Carousel2.css';

function Carousel2({ Contents }) {
    const [current, setCurrent] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)
    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        }, 6000);
    })

    const slideRight = () => {
        setCurrent(current === Contents.length-1 ? 0 : current+1)
    }
    
    const slideLeft = () => {
        setCurrent(current === 0 ? Contents.length-1 : current-1)
    }

  return (
    <div className="Carousel2" onMouseEnter={() => {setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave={() => {setAutoPlay(true)}}>
        <div className='Carousel-Wrapper'>
            {Contents.map((vid, idx) => {
                return (
                    <div key={idx} className={idx === current ? 'Carousel-Card Carousel-Card-Active' : 'Carousel-Card' }>
                        <video className='Card-Video' src={vid.video} autoPlay={current === idx} loop={current === idx} muted={current === idx} disablePictureInPicture />         
                        <div className='Card-Overlay'>
                            <div className='Card-Overlay-Content'>
                                <h2 className='Card-Title'>{vid.title}</h2>
                                <h4 className='Card-Sub-Title'>{vid.subTitle1} {vid.subTitle2}</h4>
                                {/* <h4 className='Card-Sub-Title'>{vid.subTitle2}</h4> */}
                                <p className='Card-Description'>{vid.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className='Carousel-Arrow-Left' onClick={slideLeft}></div>
            <div className='Carousel-Arrow-Right' onClick={slideRight}></div>
            <div className='Carousel-Pagination'>
                {Contents.map((_, idx) => {
                    return (
                        <div key={idx} className={idx === current ? 'Pagination-Dot Pagination-Dot-Active' : 'Pagination-Dot' } onClick={() => setCurrent(idx)}></div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default Carousel2;