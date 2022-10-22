import React from 'react';
import About from './About/About';
// import Contact from './Contact/Contact';
import AllBike from './AllBike/AllBike';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import "./Home.css"


const Home = () => {
    return (
        <div>
            <About/>
            <AllBike/>
            <Gallery/>
            {/* <Contact/> */}
          
            <Footer/>
        </div>
    );
};

export default Home;