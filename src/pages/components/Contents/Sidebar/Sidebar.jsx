import React from "react";
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <p>Навигация по странице</p>
            <ul>
                <li><a href="#">Фронтенд</a></li>
                <li><a href="#">Бэкенд</a></li>
            </ul>
        </aside>
    )

}
