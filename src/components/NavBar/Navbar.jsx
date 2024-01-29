import heartIcon from "../../assets/heart.svg"
import "./Navbar.css"
import Enlace from "../Enlace/Enlace"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="iconPrincipal">
            <a href="/" className="enlaceHeart">
                <img src={heartIcon} className="iconHeart" alt="Icono de un corazón" />
            </a>
            <div className="NombreNovia">
            <h1>Anahí</h1>
            <h1>Jaqueline</h1>
            <h1>Navarta</h1>
            <h1>Arias</h1>
            </div>
        </div>
        <div className="enlaces">
            <div className="enlaceNavbar"><Enlace href={"#"} contenido={"Vos"}/></div>
            <div className="enlaceNavbar"><Enlace href={"#"} contenido={"Nosotros"}/></div>
            <div className="enlaceNavbar"><Enlace href={"#"} contenido={"Futuro"}/></div>
            <div className="enlaceNavbar"><Enlace href={"#"} contenido={"Planes"}/></div>
            <div className="enlaceNavbar"><Enlace href={"#"} contenido={"Música"}/></div>
            <div className="enlaceNavbar"><Enlace href={"#"} contenido={"Aventuras"}/></div>
        </div>
    </div>
  )
}

export default Navbar
