/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "../styles/nav.css";
import cars from "../assets/cars.png"


const NavBar = () => {



  return (

    <nav>
      <Link to="/">
      <img className="cars-img" src={cars} alt="cars" />
      </Link>
     
      
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cars">Cars</Link>
      </li>
    </nav>
  );
};
export default NavBar;
