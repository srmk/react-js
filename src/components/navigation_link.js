import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Nav = [
    {
        id: 'mens_outerwear',
        label: 'mens outerwear',
        to: '/mens_outerwear'
    },
    {
        id: 'ladies_outerwear',
        label: 'ladies outerwear',
        to: '/ladies_outerwear'
    },
    {
        id: 'mens_tshirts',
        label: 'mens tshirts',
        to: '/mens_tshirts'
    },
    {
        id: 'ladies_tshirts',
        label: 'ladies tshirts',
        to: '/ladies_tshirts'
    },
]

class NavigationHeader extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to={'/'}>E-SHOP</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                Nav.map((item) => (
                                    <li key={item.id} className="nav-item">
                                        <Link to={item.to}>{item.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className={'cart'}>
                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default NavigationHeader;