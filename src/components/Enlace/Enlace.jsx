import PropTypes from "prop-types"
import "./Enlace.css"
const Enlace = ({href,contenido}) => {
  return (
    <>
        <a href={href} className="enlaceComponent">{contenido}</a>
    </>
  )
}

Enlace.propTypes = {
    href: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired
}

export default Enlace
