import React from 'react';
import SmartIPage from './smartI';
import MapContainer from './MapContainer';
import MoreInfo from './MoreInfo';
import LastDiv from './LastDIv';
import ContactPage from './ContactPage';
import Header from './Header';

const Home = () => {
    return (
        <div className="scroll-smooth">
            <Header />
            <div id="home">
                <SmartIPage />
            </div>
            <div id="contact" >
                <ContactPage />
            </div>
            <div id="Location">
                <MapContainer />
            </div>
            <div id="about">
                <MoreInfo />
            </div>
            <div id="services">
                <LastDiv />
            </div>
        </div>
    );
};

export default Home;
