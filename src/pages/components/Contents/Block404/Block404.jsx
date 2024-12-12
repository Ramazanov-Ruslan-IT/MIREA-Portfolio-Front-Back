import React from "react";
import "./Block404.css"

export default function Block404 (){

    return (
        <>
            <div className="content">
                <h1>Page 404</h1>
                <h2>Извините, такой страницы не существует или она еще не готова!</h2>
                <button className="error-button">Сообщить об ошибке</button>
            </div>
        </>
    )
}