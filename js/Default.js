/**
 * Created by tylerkrett on 12/04/17.
 */

import { polyfill } from 'es6-promise';
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import { render } from 'react-dom';
import App from './app/App'
import createBrowserHistory from 'history/createBrowserHistory'


// Polyfill the ES6 Promise API.
polyfill();

($document => {

    $document.addEventListener('DOMContentLoaded', () => {

        // Resolve the node in which the Laura Munner Architect is rendered to.
        const mountNode = $document.querySelector('section.app');
        const history = createBrowserHistory();

        mountNode && render(<Router history={history}><App /></Router> , mountNode);

    });

})(window.document);
