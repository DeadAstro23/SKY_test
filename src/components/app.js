import React, {Component} from 'react';
import Header   from './Header/Header.jsx';
import MainBodyDecorated from './MainBody/MainBody.jsx';
import Footer   from './Footer/Footer.jsx';

import { hasUserUniqueID } from '../utils/utils';

export default class App extends Component {
    componentDidMount () {
        hasUserUniqueID();
    }

    render () {
        return (
            <div>
                <Header />
                <hr />
                <MainBodyDecorated />
                <hr />
                <Footer />
            </div>
        );

    }
}
