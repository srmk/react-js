import React, { Component } from 'react';
// import propTypes from 'prop-types'; 
import ShopList from '../components/shop_list';

class ShopCategory extends Component {
    render() {
        const { banner, title, subTitle, data, rootPath, getSelectedItem } = this.props;
        return (
            <div className={'main-container'}>
                <div className={'banner-container'}>
                    <img src={banner} alt={'banner-img'} className={'banner'}></img>
                </div>
                <div className={'items-category'}>
                    <div className={'category-list'}>
                        <div className={'title-container'}>
                            <div className={'title'}>{title}</div>
                            <span className={'sub-title'}>{subTitle}</span>
                        </div>
                        <div className={'item-list row'}>
                            <ShopList
                                items={data}
                                rootPath={rootPath}
                                onClick={(data) => {
                                    getSelectedItem(data);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ShopCategory.propTypes = {

};

export default ShopCategory;