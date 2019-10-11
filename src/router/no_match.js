import React from "react";

class NoMatch extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div className={'error-page'}>
        <h1>404 requested URL <b>{location.pathname}</b> not found</h1>
      </div>
    );
  }
}
export default NoMatch;