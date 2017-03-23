import React, { Component } from 'react';
import CheckBoxList from 'react-checkbox-list';
import data from '../../../config/locations_and_products';

import './MainBody.less'

const CheckboxListDecorated = ( props ) => (
    <div className="checkboxList">
        <span className="checkboxList__title">
            {props.title}
        </span>
        <CheckBoxList
            defaultData={props.type}
            onChange={() => console.log(1)}
        />
    </div>
);

class MainBody extends Component {

    render() {
        const detectedIP = 'Arsenal';
        let detectedCity;
        let listOfPrograms = [];

        for (let prop in data) {
            //region detection
            if (prop  === detectedIP) {
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
                />
            )
        }

        return (
            <section className="mainBody">
                {listOfPrograms}
            </section>
        )
    }
}

export default MainBody;