import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
    );

    console.log(document.getElementById('root'));

    return element;
}



document.body.appendChild(component());