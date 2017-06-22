var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Подробнее о</h1>
            <p>Технические детали о приложении (использованные технологии: React, Foundation</p>
            <p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a>
                        - Используемый JS фреймворк
                    </li>
                    <li>
                        <a href="http://openweathermap.org">Open Weather Map</a>
                        - Открытый поставщик данных о погоде
                    </li>
                    <li>
                        <a href="http://foundation.zurb.com/">Foundation framework</a>
                        - Новый взгляд на адаптивную верстку
                    </li>
                </ul>
            </p>
        </div>
    )
};

module.exports = About;