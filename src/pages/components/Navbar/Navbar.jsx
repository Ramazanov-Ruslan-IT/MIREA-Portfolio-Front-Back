import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ setCurrentComponent }) {
    const [activeLink, setActiveLink] = useState('main'); // состояние для активной ссылки

    const handleLinkClick = (component) => (e) => {
        e.preventDefault();
        setCurrentComponent(component);
        setActiveLink(component); // установка активной ссылки
    };

    return (
        <div className="container-navbar">
            <nav>
                <a
                    href="#"
                    onClick={handleLinkClick('main')}
                    className={activeLink === 'main' ? 'active' : ''}
                >
                    Главная
                </a>
                <a
                    href="#"
                    onClick={handleLinkClick('classes1')}
                    className={activeLink === 'classes1' ? 'active' : ''}
                >
                    Первый семестр
                </a>
                <a
                    href="#"
                    onClick={handleLinkClick('classes2')}
                    className={activeLink === 'classes2' ? 'active' : ''}
                >
                    Второй семестр
                </a>
                <a
                    href="#"
                    onClick={handleLinkClick('products')}
                    className={activeLink === 'products' ? 'active' : ''}
                >
                    Услуги
                </a>
                <a
                    href="#"
                    onClick={handleLinkClick('auth')}
                    className={activeLink === 'auth' ? 'active' : ''}
                >
                    Авторизация
                </a>
            </nav>
        </div>
    );
}
