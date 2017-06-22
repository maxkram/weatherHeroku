var React = require('react');
var {Link} = require('react-router');
var Examples  = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Пример</h1>
            <p>Добро пожаловать на страничку с примерами!</p>
            <ol>
                <li>
                    <Link to="/?location=Khimki">Khimki, Russia</Link>
                </li>
                <li>
                    <Link to="/?location=Ufa">Ufa, Russia</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;