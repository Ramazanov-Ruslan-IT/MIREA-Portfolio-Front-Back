import React from "react";
import "./MainBlock.css"

export default function MainBlock() {
    return (
        <>
            <main className="content">
                <div className="intro-title">
                    <p>Добро пожаловать на мой сайт</p>
                </div>
                <div className="intro">
                    <div className="about-me">
                        <p>Меня зовут Рамазанов Руслан и я начинающий специалист по веб-разработке</p>
                    </div>
                    <div className="profile-pic">
                        <img src="https://via.placeholder.com/200x150"/>
                    </div>
                </div>

                <section>
                    <h2>Фронтенд</h2>
                    <p>
                        Фронтенд (или клиентская часть) — это то, что видит пользователь. Он включает в себя все
                        визуальные элементы веб-сайта или приложения: кнопки, формы, изображения и текст. Фронтенд
                        разработчики используют языки разметки и стилизации, такие как HTML, CSS и JavaScript, чтобы
                        создавать интерактивные и привлекательные интерфейсы. Основная задача фронтенда — обеспечить
                        удобство использования и эстетическую привлекательность.
                    </p>
                    <iframe className="video"
                            src="https://rutube.ru/play/embed/69bf711e5b650f823a648e2a2fc830af/"></iframe>

                </section>

                <section>
                    <h2>Бэкенд</h2>
                    <p>
                        Бэкенд (или серверная часть) — это "за кулисами" веб-приложения. Он отвечает за обработку
                        данных, управление пользователями и взаимодействие с базами данных. Бэкенд разработчики
                        используют языки программирования, такие как Python, Ruby, Java или PHP, а также фреймворки и
                        базы данных для создания логики приложения. Основная задача бэкенда — обеспечить стабильную
                        работу приложения и безопасность данных.
                    </p>
                    <iframe className="video"
                            src="https://rutube.ru/play/embed/69bf711e5b650f823a648e2a2fc830af/"></iframe>
                </section>
            </main>
        </>
    )
}

