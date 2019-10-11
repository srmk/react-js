import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { Switch, Route, Redirect } from "react-router-dom";
import banner from '../asset/banners/mens_tshirts.jpg';

import data from '../store/data/mens_tshirts.json';

import ShopCategory from '../components/shop_category';
import ItemDescription from '../components/item_description';

class MensTshirts extends Component { 
    constructor() {
        super(); 
        this.state ={} 
    }

    render() {
        const { match: { path } } = this.props; 
        return ( 
            <Switch>
                <Route
                    exact
                    path='/mens_tshirts'
                    render={(props) =>
                        <ShopCategory
                            banner={banner}
                            title={'mens tshirts'} 
                            rootPath={path}
                            getSelectedItem={(selected) => this.setState({ ...selected })}
                            subTitle={'This is a sample subtitle'}
                            data={data}
                            {...props}
                        />}
                />
                <Route
                    path='/mens_tshirts/:id'
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

MensTshirts.propTypes = {

};

export default MensTshirts;