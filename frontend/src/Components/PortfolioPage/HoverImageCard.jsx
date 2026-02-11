import { useNavigate } from 'react-router-dom';
import AnimatedContent from './AnimatedContent';
import './HoverImageCard.css'

const HoverImageCard = ({ image,_id }) => {
  let navigate=useNavigate()
  let hanelClick=()=>{
      navigate(`/viewmore/${_id}`)
  }
  return (
    <div className="hover-card">
      <img src={image} alt="preview" />

      <div className="hover-overlay">
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.6}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0}
        >
          <button className="hover-btn" onClick={hanelClick}>View More</button>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default HoverImageCard;
