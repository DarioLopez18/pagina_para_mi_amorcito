import PropTypes from "prop-types"
import "./CaroulselImg.css"

const CaroulselImg = ({ img, alt, text }) => {
    return (
      <div className="CarouselDiv">
        <img
          src={img}
          alt={alt}
          className="imgCarousel"
        />
        {text && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
            }}
          >
            <p>{text}</p>
          </div>
        )}
      </div>
    );
  };
CaroulselImg.propTypes ={
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CaroulselImg
