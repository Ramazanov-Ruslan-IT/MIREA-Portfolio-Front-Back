import React from "react";
import ClassesBlock from "./ClassesBlock/ClassesBlock.jsx";
import ProductsBlock from "./ProductsBlock/ProductsBlock.jsx";
import MainBlock from "./MainBlock/MainBlock.jsx";
import Block404 from "./Block404/Block404.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

import "./Content.css"


export default function Content({ currentComponent }) {

    const renderComponent = () => {
        switch (currentComponent) {
            case 'classes1':
                return <ClassesBlock />;
            case 'products':
                return <ProductsBlock />;
            case 'main':
                return <MainBlock />;
            default:
                return <Block404 />;
        }
    };

    return (
        <div className="container-content">
            <Sidebar />
            {renderComponent()}
        </div>
    );
}
