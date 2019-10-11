import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const sizeChart = ['S', 'M', 'L', 'XL', 'XXL'];
const noOfQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            size: sizeChart[0],
            quantity: noOfQuantities[0],
            submit: false,
        }
 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submit: true });
        if (this.state.submit) {
            console.log('CART ADDED');
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState((oldState) => ({
           [name]: value,
        }))
    }

    render() {
        const { title, price, largeImage, description } = this.props;
        const { size, quantity } = this.state;
        
        return largeImage ? (
            <div className={'description-container'}>
                <div className={'row'}>
                    <div className={'col-lg-6'}>
                        <img src={require(`../store/${largeImage}`)} width={'100%'} alt={'mens_outerwear'} />
                    </div>
                    <div className={'col-lg-6 form-area'}>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'item-name'}>{title}</div>
                            <div className={'item-price'}>₹ {price}</div>
                            <div className={'dropdown-container'}>
                                <div>Size</div>
                                <select className="custom-select" name={'size'} onChange={this.handleChange}>
                                    {
                                        sizeChart.map((val) => (
                                            <option key={val} value={val === size ? val : ''}>{val}</option>
                                        ))
                                    }
                                </select> 
                            </div>
                            <div className={'dropdown-container'}>
                                <div>Quantity</div>
                                <select className="custom-select" name={'quantity'} onChange={this.handleChange}>
                                    {
                                        noOfQuantities.map((val) => (
                                            <option key={val} value={val === quantity ? val : ''}>{val}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className={'item-description'} dangerouslySetInnerHTML={{ __html: description }} /> 
                            <button type={'submit'}>ADD TO CART</button>
                        </form>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

Cart.propTypes = {

};

export default Cart;