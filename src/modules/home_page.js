import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import banner from '../asset/banner-plain.jpg';
import mens_outerwear from '../asset/banners/mens_outerwear.jpg';
import ladies_outerwear from '../asset/banners/ladies_outerwear.jpg';
import mens_tshirts from '../asset/banners/mens_tshirts.jpg';
import ladies_tshirts from '../asset/banners/ladies_tshirts.jpg';

class HomePage extends Component {
    render() {
        return (
            <div className={'main-container'}>
                <div className={'banner-container'}>
                    <img src={banner} alt={'banner-img'} className={'banner'}></img>
                </div>
                <div className={'items-category'}>
                    <div className={'category-container'}>
                        <img src={mens_outerwear} width={'100%'} alt={'mens_outerwear'}></img>
                        <div className={'category-name'}>
                            <label>Mens Outerwear</label>
                        </div>
                        <Link className={'show-category'} to={'/mens_outerwear'}>
                            <button> SHOW MORE </button>
                        </Link>
                    </div>
                    <div className={'category-container'}>
                        <img src={ladies_outerwear} width={'100%'} alt={'ladies_outerwear'}></img>
                        <div className={'category-name'}>
                            <label>Ladies Outerwear</label>
                        </div>
                        <Link className={'show-category'} to={'/ladies_outerwear'}>
                            <button> SHOW MORE </button>
                        </Link>
                    </div>
                    <div className={'row'}>
                        <div className={'category-container col'}>
                            <img src={mens_tshirts} width={'100%'} alt={'mens_tshirts'}></img>
                            <div className={'category-name'}>
                                <label>Mens Tshirts</label>
                            </div>
                            <Link className={'show-category'} to={'/mens_tshirts'}>
                                <button> SHOW MORE </button>
                            </Link>
                        </div>
                        <div className={'category-container col'}>
                            <img src={ladies_tshirts} width={'100%'} alt={'ladies_tshirts'}></img>
                            <div className={'category-name'}>
                                <label>Ladies Tshirts</label>
                            </div>
                            <Link className={'show-category'} to={'/ladies_tshirts'}>
                                <button> SHOW MORE </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;