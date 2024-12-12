import React from "react";
import "./Header.css"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <div className="logo-img">
                    <img src="" alt=""/>
                    <div className="logo-title">
                        <p>Logo</p>
                    </div>
                </div>
            </div>

            <div className="group-info">
                <p>Группа<u> ЭФБО-06-23</u></p>
                <p>Рамазанов Руслан Шамильевич</p>
            </div>
        </header>
    )
}
