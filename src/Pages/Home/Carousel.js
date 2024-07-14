import './Carousel.css';

function Carousel({ Contents }) {
  return (
    <div className="Carousel-Frame">
        <div className="Carousel-Container">
            <div className='Carousel'>
                {Contents.map((content, idx) => (
                    <div className='Carousel-Item' key={`${idx}-${content.title}`}>
                        <video src={content.video} autoPlay loop muted disablePictureInPicture />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Carousel;