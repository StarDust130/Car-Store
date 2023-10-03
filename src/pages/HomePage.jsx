import { Link } from "react-router-dom";
import BannerImage from "./../assets/bgi.jpg"
// import Image from "./../assets/bg6.jpeg"
import Image from "./../assets/bg.avif"
import "../styles/home.css"


function HomePage() {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="img" style={{ backgroundImage: `url(${Image})` }}>
          <div className="headerContainer">
            <h1>StarDust Cars🌟 </h1>
            <p>
              At StarDust, we offer World Best Cars a curated selection of
              top-tier cars that define luxury and performance.
            </p>
            <p>
              Our commitment to quality and customer satisfaction sets us apart.
            </p>
            <Link to="/cars">
              <button> ORDER NOW </button>
            </Link>
          </div>
        </div>
      </div>
      
     
    </>
  );
}

export default HomePage;
