import React from 'react';
import ReactDom from 'react-dom';

import { Button, ButtonToolbar } from 'react-bootstrap';


// mount node
const mountNode = document.getElementById('app-container')

// basically render buttons
const buttonsInstance = (
  <ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
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
