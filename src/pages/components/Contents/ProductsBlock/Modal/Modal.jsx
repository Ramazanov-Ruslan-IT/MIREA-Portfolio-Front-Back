import { useState, useEffect, useRef } from "react";
import './Modal.css';

export default function Modal({ isOpen, onClose, onFormSubmit }) {
    const modalRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!isOpen) {
            setPosition({ x: 0, y: 0 }); // Сброс позиции при закрытии
        }
    }, [isOpen]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartPosition({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - startPosition.x,
                y: e.clientY - startPosition.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        } else {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(); // Вызов переданного обработчика
    };

    if (!isOpen) return null;

    return (
        <div
            id="modal"
            className="modal"
            ref={modalRef}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                position: "absolute",
            }}
            onMouseDown={handleMouseDown}
        >
            <div className="modal-content">
                <span className="close" onClick={onClose}>x</span>
                <h3>Разработка веб-приложений</h3>
                <p>Заполните форму, и мы обязательно свяжемся в ближайшее время</p>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-item-name">
                        <label className="label">Ваше имя</label>
                        <input className="name-input" type="text" name="name" id="name" placeholder="Иван Иванович Иванов" />
                    </div>
                    <div className="form-item-email">
                        <label className="label">E-mail</label>
                        <input className="email-input" type="email" name="email" id="email" placeholder="example@domain.ru" />
                    </div>
                    <div className="form-item-number">
                        <label className="label">Контактный номер телефона</label>
                        <input className="number-input" type="number" name="number" id="number" placeholder="+7 999 999 99 99" />
                    </div>
                    <div className="form-item-language">
                        <label className="label">Разговорный язык</label>
                        <select className="language-input" name="language" id="language">
                            <option value="russia">Русский</option>
                            <option value="china">Китайский</option>
                            <option value="england">Английский</option>
                        </select>
                    </div>
                    <div className="form-item-comment">
                        <label className="label">Комментарий</label>
                        <textarea className="comment-input" type="text" name="comment" id="comment"></textarea>
                    </div>
                    <div className="form-item-agreement-user-data">
                        <input className="agreement-user-data-input" type="checkbox" id="agreement-user-data" />
                        <label className="label">Согласен на обработку моих персональных данных</label>
                    </div>
                    <button className="submit-button" type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
}
