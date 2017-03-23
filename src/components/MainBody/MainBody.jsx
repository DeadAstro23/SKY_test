import React, {Component} from 'react';
import CheckBoxList from 'react-checkbox-list';
import data from '../../../config/locations_and_products';
import geoLocation from '../../utils/geoAPI.js';

import './MainBody.less'

class CheckboxListDecorated extends Component {
	render() {
		return (
			<div className="checkboxList">
				<span className="checkboxList__title">
						{this.props.title}
				</span>
				<CheckBoxList
					defaultData={this.props.type}
					onChange={this.props.handleChange}
				/>
			</div>
		)
	}
}

export default class MainBody extends Component {
	constructor() {
		super();

		this.cart = [];

		this.state = {
			city: 'Default',
			cart: []
		}
	}

	componentDidMount() {
		geoLocation.then((result) => {
			if (result.city == '') {
				this.setState({
					city: 'Arsenal',
				})
			}
		})
	}

	addItemToCart = (item) => {
		console.log(item);
		this.cart.push(item);
		console.log(this.cart)
		this.setState({
			cart: this.cart
		})
		console.log(this.state)
	};

	render() {
		let detectedCity;
		let listOfPrograms = [];

		for (let prop in data) {
			//region detection
			if (prop == "Arsenal") {
				detectedCity = data[prop];
			}
		}

		//creating all the lists of programs
		for (let category in detectedCity) {
			listOfPrograms.push(
				<CheckboxListDecorated
					key={category}
					type={detectedCity[category]}
					title={category}
					handleChange={
						(item) => this.addItemToCart(item)
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
					{this.state.cart}
				</div>
			</section>
		)
	}
};