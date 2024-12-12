import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Content from "./components/Contents/Content.jsx"; // Импортируем Content

import "./MainPage.css";

export default function MainPage() {
    const [currentComponent, setCurrentComponent] = useState('main');

    return (
        <>
            <Header />
            <Navbar setCurrentComponent={setCurrentComponent} />
            <Content currentComponent={currentComponent} />
            <Footer />
        </>
    );
}
