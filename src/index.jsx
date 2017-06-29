// css code
require('./index.scss');

// js code
import React from 'react';
import ReactDom from 'react-dom';

import { Button, ButtonToolbar } from 'react-bootstrap';


// mount node
const mountNode = document.getElementById('app-container');

// basically render buttons
const buttonsInstance = (
  <ButtonToolbar>
    <Button>Default</Button>
    <Button bsStyle="primary">Primary</Button>
    <Button bsStyle="success">Success</Button>
    <Button bsStyle="info">Info</Button>
    <Button bsStyle="warning">Warning</Button>
    <Button bsStyle="danger">Danger</Button>
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);


//render
ReactDom.render(
    <div className="col-sm-12">
        <div><h2>Simple Examples</h2></div>
        <div>
            { buttonsInstance }
        </div>
    </div>,
    mountNode
);
