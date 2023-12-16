import "./App.css";
import AboutFoundation from "./Page/Home/Home/AboutFoundation/AboutFoundation";
import Banner from "./Page/Home/Home/Banner/Banner";
import FundRaising from "./Page/Home/Home/FundRaising/FundRaising";
import Volunteer from "./Page/Home/Home/Volunteer/Volunteer";
import Mission from "./Page/Home/Mission/Mission";
import Footer from "./component/Shared/Footer/Footer";
import Navbar from "./component/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Mission />
      <AboutFoundation />
      <Volunteer />
      <FundRaising />
      <Footer />
    </div>
  );
}

export default App;
