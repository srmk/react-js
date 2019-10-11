import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Route, Switch, Redirect } from "react-router-dom";
import banner from '../asset/banners/mens_outerwear.jpg';

import data from '../store/data/mens_outerwear.json';

import ShopCategory from '../components/shop_category';
import ItemDescription from "../components/item_description";

class MensOuterwear extends Component {
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
                    path='/mens_outerwear'
                    render={(props) =>
                        <ShopCategory
                            banner={banner}
                            title={'mens outerwear'}
                            rootPath={path}
                            getSelectedItem={(selected) => this.setState({ ...selected })}
                            subTitle={'This is a sample subtitle'}
                            data={data}
                            {...props}
                        />}
                />
                <Route
                    path='/mens_outerwear/:id'
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

MensOuterwear.propTypes = {
    
};

export default MensOuterwear;