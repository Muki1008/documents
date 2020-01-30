import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './views/app/App';
import './themes/basic.scss';

/**
 * Attaches the application in the dom.
 */
ReactDOM.render(<App />, document.getElementById('root'));
