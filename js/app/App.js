import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Header from './containers/Header';
import Home from './containers/Home';
import Footer from './containers/Footer';

export default class Body extends Component {

    render() {

        return (
        <section>
                <Header />
                <Route path="/" component={Home} />
                <Route path="/about" component={Footer} />
                <Route path="/contact" component={Footer} />
                <Route path="/services" component={Header} />
                <Footer />
        </section>
        );
    }
}
