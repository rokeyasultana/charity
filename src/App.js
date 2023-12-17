import React, { useState, useEffect } from "react";
import "./App.css";
import AboutFoundation from "./Page/Home/Home/AboutFoundation/AboutFoundation";
import Banner from "./Page/Home/Home/Banner/Banner";
import FundRaising from "./Page/Home/Home/FundRaising/FundRaising";
import Volunteer from "./Page/Home/Home/Volunteer/Volunteer";
import Mission from "./Page/Home/Mission/Mission";
import Footer from "./component/Shared/Footer/Footer";
import Navbar from "./component/Shared/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./component/Shared/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Banner />
          <Mission />
          <AboutFoundation />
          <Volunteer />
          <FundRaising />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
