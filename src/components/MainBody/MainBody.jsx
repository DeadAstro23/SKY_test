import React 						from 'react';
import data 						from '../../../config/locations_and_products';
import { CheckboxListDecorated } 	from '../CheckBoxList/CheckBoxList.jsx';
import {toggleItem} 				from "../../actions/actions";
import geoLocation 					from '../../utils/geoAPI.js';
import {Link} 						from 'react-router-dom'
import {connect} 					from "react-redux";

import './MainBody.less'

class MainBody extends React.Component {
	constructor() {
		super();
		this.state = {
			city: 'Default',
		}
	}

	componentDidMount() {
		geoLocation.then((result) => {
			if (result.city !== '') {
				this.setState ({
					city: result.city,
				})
			}
		})
	}

	detectCityData () {
        let detectedCityData;
        let city;
        let cityByIP = this.state.city;

        //region detection
        for (city in data) {
            if (city == cityByIP) {
                return detectedCityData = data[city];
            }
            else {
                return detectedCityData = data.Default;
            }
        }
	}

	prepareListOfPrograms () {
        let listOfPrograms = [];
        const detectedCityData = this.detectCityData();

        for (let category in detectedCityData) {
            listOfPrograms.push(
				<CheckboxListDecorated
					key		={category}
					type	={detectedCityData[category]}
					title	={category}
					onClick	={
                        (event) => {
                            this.props.onItemClick(event.target.value)
                        }
                    }
				/>
            )
        }

        return listOfPrograms;
	}

	render() {
		const preparedListOfPrograms = this.prepareListOfPrograms();

		return (
			<section className="mainBody">
				{preparedListOfPrograms}
				<div
					ref="cart"
					className="mainBody__cart"
				>
					<span className="mainBody__cart__title">
						Cart
					</span>
					<ul>
						{this.props.itemsInCart.map((itemObj) => (
							<li key={itemObj.item}>
								{itemObj.item}
							</li>
						))}
					</ul>
					<Link to="/checkout">
						<button className="mainBody__cart__button">
							Checkout
						</button>
					</Link>
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => {
    return {
		itemsInCart: state.product
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (item) => {
            dispatch(toggleItem(item))
        }
    }
};

const MainBodyDecorated = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainBody);

export default MainBodyDecorated;