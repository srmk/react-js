import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
 
import { Link } from "react-router-dom";

class ShopList extends Component {
    render() {
        const { items, onClick, rootPath } = this.props;
        return (
            <Fragment>
                {
                    items.map((item, i) => {
                        const img = require(`../store/${item.image}`);
                        return (
                            <Link to={`${rootPath}/${item.name}`} key={item.title}>
                                <div
                                    key={item.title}
                                    className={'shop-list-container'}
                                    onClick={() => onClick({...item})}
                                >
                                    <img src={img} alt={item.title} width={'100%'} />
                                    <div>
                                        <div className={'item-name'}>{item.title}</div>
                                        <span>₹ {item.price}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </Fragment>
        );
    }
}

ShopList.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func,
};

export default ShopList;