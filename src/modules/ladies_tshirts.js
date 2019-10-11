import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Switch, Route, Redirect } from "react-router-dom";
import banner from '../asset/banners/ladies_tshirts.jpg';

import data from '../store/data/ladies_tshirts.json';

import ShopCategory from '../components/shop_category';
import ItemDescription from '../components/item_description';

class LadiesTshirts extends Component {
    constructor() {
        super(); 
        this.state = {}
    }

    render() {
        const { match: { path } } = this.props; 
        return (
            <Switch>
                <Route
                    exact
                    path='/ladies_tshirts'
                    render={(props) =>
                        <ShopCategory
                            banner={banner}
                            title={'ladies tshirts'}
                            rootPath={path}
                            getSelectedItem={(selected) => this.setState({ ...selected })}
                            subTitle={'This is a sample subtitle'}
                            data={data}
                            {...props}
                        />}
                />
                <Route
                    path='/ladies_tshirts/:id'
                    render={(props) =>
                        this.state.description === undefined && <Redirect to={`/`} /> ||
                        <ItemDescription
                            {...this.state}
                            {...props}
                        />
                    }
                />
            </Switch>
        );
    }
}

LadiesTshirts.propTypes = {

};

export default LadiesTshirts;