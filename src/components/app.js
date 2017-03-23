import React, {Component} from 'react';
import Header   from './Header/Header.jsx';
import MainBody from './MainBody/MainBody.jsx';
import Footer   from './Footer/Footer.jsx';

import {hasUserUniqueID} from '../utils/utils';
import geoLocation from '../utils/geoAPI.js';

export default class App extends Component {
    componentDidMount() {
        hasUserUniqueID();
    }

    render() {
        geoLocation.then((result) =>
            console.log(result)
        );

        return (
            <div>
                <Header />
                <hr />
                <MainBody />
                <hr />
                <Footer />
            </div>
        );

    }
}
