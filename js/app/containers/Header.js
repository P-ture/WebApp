import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class Header extends Component {

    render() {
        return (
            <header>
                <ul>
                    <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li>
                        <ul>
                            <li><NavLink to="/services" activeClassName="selected">Services</NavLink></li>
                            <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                            <li><NavLink to="/contact" activeClassName="selected">Contact</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </header>
        );
    }
}
