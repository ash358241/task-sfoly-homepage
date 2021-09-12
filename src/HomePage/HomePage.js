import React from 'react';
import About from '../components/About/About';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import Coordinator from '../components/Coordinator/Coordinator';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Institute from '../components/Institute/Institute';
import Olympiads from '../components/Olympiads/Olympiads';
import Reviews from '../components/Reviews/Reviews';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Olympiads></Olympiads>
            <Institute></Institute>
            <Coordinator></Coordinator>
            <About></About>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;