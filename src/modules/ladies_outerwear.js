import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Route, Switch, Redirect } from "react-router-dom";
import banner from '../asset/banners/ladies_outerwear.jpg';

import data from '../store/data/ladies_outerwear.json';

import ShopCategory from '../components/shop_category';
import ItemDescription from '../components/item_description';

class LadiesOuterwear extends Component {
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
                    path='/ladies_outerwear'
                    render={(props) =>
                        <ShopCategory
                            banner={banner}
                            title={'ladies outerwear'} 
                            rootPath={path}
                            getSelectedItem={(selected) => this.setState({ ...selected })}
                            subTitle={'This is a sample subtitle'}
                            data={data}
                            {...props}
                        />}
                />
                <Route
                    path='/ladies_outerwear/:id'
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

LadiesOuterwear.propTypes = {

};

export default LadiesOuterwear;