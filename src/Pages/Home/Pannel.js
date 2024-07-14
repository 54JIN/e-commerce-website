import './Pannel.css';

function Pannel({ title, description, img }) {
  return (
    <div className="Pannel">
        <div className="Pannel-Content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <img src={img} alt={`${title} Icon`}/>
    </div>
  );
}

export default Pannel;