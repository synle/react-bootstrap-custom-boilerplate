// css code
require('./index.scss');

// js code
import React from 'react';
import ReactDom from 'react-dom';

import { Accordion, Alert, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Carousel, CarouselItem, Checkbox, Clearfix, CloseButton, ControlLabel, Col, Collapse, Dropdown, DropdownButton, Fade, Form, FormControl, FormGroup, Glyphicon, Grid, HelpBlock, Image, InputGroup, Jumbotron, Label, ListGroup, ListGroupItem, Media, MenuItem, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Nav, Navbar, NavbarBrand, NavDropdown, NavItem, Overlay, OverlayTrigger, PageHeader, PageItem, Pager, Pagination, PaginationButton, Panel, PanelGroup, Popover, ProgressBar, Radio, ResponsiveEmbed, Row, SafeAnchor, SplitButton, Tab, TabContainer, TabContent, Table, TabPane, Tabs, Thumbnail, Tooltip, Well } from 'react-bootstrap';


// mount node
const mountNode = document.getElementById('app-container');

// examples...
let exampleDoms = [];

// function to get the dom...
const _getExampleDom = (elmTitle, elmContent) => {
    return (
        <div className="example-section">
            <div className="example-section-title">{elmTitle}</div>
            <div className="example-section-content">
                {elmContent}
            </div>
        </div>
    );
}

const _pushExampleDom = (elmTitle, elmContent) => {
    exampleDoms.push(
        _getExampleDom(
            elmTitle,
            elmContent
        )
    );
}

const _getExampleDomList = () => {
    // function that handle the mapping
    let counter = 0;
    return exampleDoms.map( (curDom) => {
        counter++;
        return <div key={counter}>{curDom}</div>
    });
}


// example start here
_pushExampleDom(
    '<Button /> Sizes',
    (
        <table>
            <tr className="some-padding">
                <td></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">primary</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">success</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">info</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">warning</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">danger</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">link</span></td>
            </tr>
            <tr className="some-padding">
                <td><span className="flag-key">bsSize</span><span className="flag-value">large</span></td>
                <td><Button bsStyle="primary" bsSize="large">primary</Button></td>
                <td><Button bsStyle="success" bsSize="large">success</Button></td>
                <td><Button bsStyle="info" bsSize="large">info</Button></td>
                <td><Button bsStyle="warning" bsSize="large">warning</Button></td>
                <td><Button bsStyle="danger" bsSize="large">danger</Button></td>
                <td><Button bsStyle="link" bsSize="large">link</Button></td>
            </tr>
            <tr className="some-padding">
                <td><span className="flag-key">bsSize</span><span className="flag-value">DEFAULT</span></td>
                <td><Button bsStyle="primary">primary</Button></td>
                <td><Button bsStyle="success">success</Button></td>
                <td><Button bsStyle="info">info</Button></td>
                <td><Button bsStyle="warning">warning</Button></td>
                <td><Button bsStyle="danger">danger</Button></td>
                <td><Button bsStyle="link">link</Button></td>
            </tr>
            <tr className="some-padding">
                <td><span className="flag-key">bsSize</span><span className="flag-value">small</span></td>
                <td><Button bsStyle="primary" bsSize="small">primary</Button></td>
                <td><Button bsStyle="success" bsSize="small">success</Button></td>
                <td><Button bsStyle="info" bsSize="small">info</Button></td>
                <td><Button bsStyle="warning" bsSize="small">warning</Button></td>
                <td><Button bsStyle="danger" bsSize="small">danger</Button></td>
                <td><Button bsStyle="link" bsSize="small">link</Button></td>
            </tr>
            <tr className="some-padding">
                <td><span className="flag-key">bsSize</span><span className="flag-value">xsmall</span></td>
                <td><Button bsStyle="primary" bsSize="xsmall">primary</Button></td>
                <td><Button bsStyle="success" bsSize="xsmall">success</Button></td>
                <td><Button bsStyle="info" bsSize="xsmall">info</Button></td>
                <td><Button bsStyle="warning" bsSize="xsmall">warning</Button></td>
                <td><Button bsStyle="danger" bsSize="xsmall">danger</Button></td>
                <td><Button bsStyle="link" bsSize="xsmall">link</Button></td>
            </tr>
        </table>
    )
)



_pushExampleDom(
    '<Button /> States',
    (
        <table>
            <tr className="some-padding">
                <td></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">primary</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">success</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">info</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">warning</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">danger</span></td>
                <td><span className="flag-key">bsStyle</span><span className="flag-value">link</span></td>
            </tr>
            <tr className="some-padding">
                <td><span className="flag-key">DEFAULT</span></td>
                <td><Button bsStyle="primary" bsSize="large">primary</Button></td>
                <td><Button bsStyle="success" bsSize="large">success</Button></td>
                <td><Button bsStyle="info" bsSize="large">info</Button></td>
                <td><Button bsStyle="warning" bsSize="large">warning</Button></td>
                <td><Button bsStyle="danger" bsSize="large">danger</Button></td>
                <td><Button bsStyle="link" bsSize="large">link</Button></td>
            </tr>
            <tr className="some-padding">
                <td><span className="flag-key">active</span></td>
                <td><Button bsStyle="primary" active>primary</Button></td>
                <td><Button bsStyle="success" active>success</Button></td>
                <td><Button bsStyle="info" active>info</Button></td>
                <td><Button bsStyle="warning" active>warning</Button></td>
                <td><Button bsStyle="danger" active>danger</Button></td>
                <td><Button bsStyle="link" active>link</Button></td>
            </tr>
            <tr className="some-padding">
                <td><span className="flag-key">disabled</span></td>
                <td><Button bsStyle="primary" bsSize="small" disabled>primary</Button></td>
                <td><Button bsStyle="success" bsSize="small" disabled>success</Button></td>
                <td><Button bsStyle="info" bsSize="small" disabled>info</Button></td>
                <td><Button bsStyle="warning" bsSize="small" disabled>warning</Button></td>
                <td><Button bsStyle="danger" bsSize="small" disabled>danger</Button></td>
                <td><Button bsStyle="link" bsSize="small" disabled>link</Button></td>
            </tr>
        </table>
    )
)



//render
ReactDom.render(
    <div>
        { _getExampleDomList() }
    </div>,
    mountNode
);
