import React, { Component } from 'react';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <section>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a className="facebook">Facebook</a></li>
                        <li><a className="twitter">Twitter</a></li>
                        <li><a className="instagram">Instagram</a></li>
                        <li><a className="linkedin">LinkedIn</a></li>
                        <li><a className="email">Email</a></li>
                    </ul>
                </section>
                <section>
                    <p>&copy;Pture 2017</p>
                </section>
            </footer>
        );
    }
}
