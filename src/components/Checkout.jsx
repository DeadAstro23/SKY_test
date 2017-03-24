import React, {Component} from 'react';
import Header   from './Header/Header.jsx';
import Footer   from './Footer/Footer.jsx';
import {connect} from "react-redux";

class Checkout extends Component {

    render () {
        return (
            <div>
                <Header />
                <hr />
                {(this.props.itemsInCart.length > 0) &&
                    <span>
                        In cart:
                        <ul>
						{this.props.itemsInCart.map((itemObj) => (
                            <li key={itemObj.item}>
                                {itemObj.item}
                            </li>
                        ))}
					    </ul>
                    </span>
                   ||
                    <p>There is nothing in your cart yet:(</p>
                }
                <hr />
                <Footer />
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        itemsInCart: state.product
    }
};
const mapDispatchToProps = (dispatch) => {
    return {}
};

const CheckoutDecorated = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);

export default CheckoutDecorated
