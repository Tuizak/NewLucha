/* JESUS Y OSCAR LE MOVIMOS A ESTO  */
/* SELE AGREGO MAS APARTADOS QUE EVENTOS HOME Y EL LOGO TE REGRESA ALA PRINCIPAL MIENTRAS QUE LOS DEMAS NO HACEN NADA */
import { Link, Outlet } from "react-router-dom";
import perfilImg from '../../Material/perfil.png';
import logoImg from '../../Material/logo3.png'; 
import "./desingNav.css";
import { AuthContextProvider } from "../../contexts/AuthContext";

const NavBar = () => {
  return (
    <div>
      <AuthContextProvider>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logoImg} alt="Logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Eventos">Eventos</Link>
          </li>
          <li>
            <Link to="">Lo mas nuevo</Link>
          </li>
          <li>
            <Link to="">Eventos pasados</Link>
          </li>
          
          <li className="profile-item">
            <Link to="/Perfil" className="profile-link">
              <img src={perfilImg} alt="Perfil" className="icon" />
              <span>Iniciar sesión</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      </AuthContextProvider>
    </div>
  );
};

export default NavBar;
