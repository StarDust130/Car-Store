
import {Routes , Route} from "react-router-dom"

import CarCard from "./components/CarCard";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
 

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarCard />} />
      </Routes>

      

      <Footer />
    </>
  );
}

export default App;