import { useState } from 'react';
import Modal from './Modal/Modal.jsx';
import './ProductsBlock.css';

export default function ProductsBlock() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notification, setNotification] = useState(''); // Состояние для уведомления

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = () => {
        setNotification('Ваша заявка принята, мы свяжемся с вами в течение дня!');
        closeModal();
        setTimeout(() => setNotification(''), 5000); // Убираем уведомление через 5 секунд
    };

    return (
        <main className="content">
            <h1>Разработка веб-приложений</h1>
            <div className="projects">
                <div className="project-card">
                    <img src="" alt="" />
                    <p>Сайт-визитка</p>
                    <button onClick={openModal}>Заказать</button>
                </div>
                <div className="project-card">
                    <img src="" alt="" />
                    <p>Корпоративный сайт</p>
                    <button onClick={openModal}>Заказать</button>
                </div>
                <div className="project-card">
                    <img src="" alt="" />
                    <p>Интернет-магазин</p>
                    <button onClick={openModal}>Заказать</button>
                </div>
            </div>

            <section className="text">
                <h2>1 Заголовок</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, dolorem fugit quam neque ab nesciunt
                    dicta voluptas odit ut vitae quis corrupti doloribus dolor recusandae similique facilis voluptates beatae commodi.</p>

                <h2>2 Заголовок</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut totam labore ratione similique?
                    Asperiores eligendi molestiae veniam officiis adipisci corrupti, sint quibusdam sunt. Eligendi natus accusantium culpa
                    mollitia assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quos neque provident distinctio
                    possimus, ullam est quibusdam blanditiis quo nisi odit ea mollitia atque dicta itaque reiciendis sequi delectус
                    totam.</p>
            </section>

            <Modal isOpen={isModalOpen} onClose={closeModal} onFormSubmit={handleFormSubmit} />

            {notification && (
                <div className="notification">
                    {notification}
                </div>
            )}
        </main>
    );
}
