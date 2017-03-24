import React from 'react';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import CheckBoxList from '../src/components/CheckBoxList/CheckBoxList';
import renderer from 'react-test-renderer';

it('Header renders correctly', () => {
    const app = renderer.create(
        <Header />
    ).toJSON();
    expect(app).toMatchSnapshot();
});

it('Footer renders correctly', () => {
    const app = renderer.create(
        <Footer />
    ).toJSON();
    expect(app).toMatchSnapshot();
});

it('CheckBoxList renders correctly', () => {
    const app = renderer.create(
        <CheckBoxList />
    ).toJSON();
    expect(app).toMatchSnapshot();
});
