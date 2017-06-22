var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
    onSearch: function (e) {
      e.preventDefault();

        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">

                        <li className="menu-text">Reactивная погода</li>
                        <li>
                            <IndexLink to="/" activeClassName="active"
                                       activeStyle={{fontWeight: 'bold'}}>Погода </IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> О
                                программе </Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Примеры </Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Поиск погоды по городу" ref="search"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
