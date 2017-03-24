import React, {Component} from 'react';
import CheckBoxList from '../CheckBoxList/CheckBoxList.jsx';
import data from '../../../config/locations_and_products';
import {toggleItem} from "../../actions/actions";
import geoLocation from '../../utils/geoAPI.js';
import {Link} from 'react-router-dom'

import './MainBody.less'
import {connect} from "react-redux";


class CheckboxListDecorated extends Component {
	render() {
		return (
			<div className="checkboxList">
				<span className="checkboxList__title">
					{this.props.title}
				</span>
				<CheckBoxList
					defaultData={this.props.type}
					onClick={this.props.onClick}
				/>
			</div>
		)
	}
}

class MainBody extends Component {
	constructor() {
		super();
		this.state = {
			city: 'Default',
		}
	}

	componentDidMount() {
		geoLocation.then((result) => {
			if (result.city !== '') {
				this.setState({
					city: result.city,
				})
			}
		})
	}

	render() {
		let detectedCityData;
		let listOfPrograms = [];
		let cityByIP = this.state.city;

		for (let city in data) {
			//region detection
			if (city == cityByIP) {
				detectedCityData = data[city];
			}
			else {
                detectedCityData = data.Default;
			}
		}

		//creating all the lists of programs
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

		return (
			<section className="mainBody">
				{listOfPrograms}
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