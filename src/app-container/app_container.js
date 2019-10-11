import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';

import { updateData } from "../action/actions";
import MainRoute from '../router/router';

class AppContainer extends Component {
    componentDidMount() {
        this.props.updateData('');
        
    }
    render() {
        const { history } = this.props;
        return ( 
            <ConnectedRouter history={history}>
                <MainRoute history={history} />
            </ConnectedRouter> 
        );
    }
}

const mapStateToProps = ({ updateData }) => {
    return {
    //   newData
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ 
      updateData
    }, dispatch),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);