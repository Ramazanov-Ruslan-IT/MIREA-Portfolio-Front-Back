import React, { useState } from "react";
import "./ClassesBlock.css";

export default function ClassesBlock() {
    const [checkedLectures, setCheckedLectures] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    });

    const handleLectureRowClick = (id) => {
        setCheckedLectures((prevChecked) => ({
            ...prevChecked,
            [id]: !prevChecked[id],
        }));
    };

    return (
        <main className="content">
            <h1> Первый семестр </h1>
            <div className="Tables">
                <div className="Table-1">
                    <table rules="all" className="table">
                        <caption> Лекции</caption>
                        <thead>
                        <tr>
                            <th>Номер</th>
                            <th>Тема</th>
                            <th>Посещение</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[
                            { id: 1, topic: "Основы языка HTML" },
                            { id: 2, topic: "Углубленное изучение HTML" },
                            { id: 3, topic: "Основы работы с CSS" },
                            { id: 4, topic: "Адаптивная вёрстка Flexbox и Grid Layout" },
                            { id: 5, topic: "Bootstrap - работа с фреймворком" },
                            { id: 6, topic: "Основы языка JavaScript" },
                            { id: 7, topic: "Работа с DOM и событиями в JavaScript" },
                            { id: 8, topic: "Введение в GitHub и GitHub Pages" },
                        ].map((lecture) => (
                            <tr key={lecture.id} onClick={() => handleLectureRowClick(lecture.id)}>
                                <td>{lecture.id}</td>
                                <td>{lecture.topic}</td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={checkedLectures[lecture.id]}
                                        readOnly
                                    />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <div className="Table-2">
                    <table rules="all" className="table">
                <caption> Практики</caption>
                <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Тема</th>
                        <th>Посещение</th>
                        <th>Выполнение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> Основы языка HTML</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> Формы и кнопки HTML</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td> Таблицы и интерактивные элементы HTML</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td> Основы работы с CSS</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td> Работа с классами в CSS</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td> Работа с сетками и разметкой в HTML</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td> Адаптивная вёрстка</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td> Bootstrop</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td> Bootstrop</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td> Основы языка JavaScript</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td> Базовые задачи на JS</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td> DOM-структура приложений и работа с объектами в языке JS</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td> Встраивание скриптов</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td> Отладка сценариев</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td> Анимация и работа с ними</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td> GitHub</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td> Защита проекта</td>
                        <td><input type="checkbox" name="select"/></td>
                        <td><input type="checkbox" name="select"/></td>
                    </tr>
                </tbody>
            </table>
                </div>
            </div>
            <br/>
            <div className="Location">
                <p> Занятия проходят по адресу: г. Москва, проспект Вернадского, д. 78</p>
                <div className="Map">
                    <iframe className="map" src="https://yandex.ru/map-widget/v1/?ll=37.480567%2C55.669855&mode=poi&poi%5Bpoint%5D=37.480225%2C55.669957&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1084832794&z=15.86"></iframe>
                </div>
            </div>
            <br/>
            <div className="WorkProgramm">
                <p> Рабочая программа </p>
                <object className="object-1" data="#" type="application/pdf">не удалось показать документ</object>
            </div>
        </main>
    )
}
