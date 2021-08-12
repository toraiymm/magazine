import React from 'react';
import '../Header/app-header.css'

class Header extends React.Component {
    render() {
        const {allPost, liked} = this.props;
        return (
            <div className="app-header d-flex">
                <h1>Список товаров магазина "Apple"</h1>
                <h2>Количество товаров: {allPost}</h2>
                <h2>В наличии осталось: {liked}</h2>
            </div>
        )
    }

}

export default Header;
