import React from "react";
import "./Block404.css";

export default function Block404() {
    return (
        <div className="block404-container">
            <div className="content">
                <h1 className="error-title">404</h1>
                <h2 className="error-subtitle">Извините, такой страницы не существует или она ещё не готова!</h2>
                <img src="https://via.placeholder.com/150" alt="Placeholder" className="error-image" />
                <button className="error-button">Сообщить об ошибке</button>
            </div>
        </div>
    );
}