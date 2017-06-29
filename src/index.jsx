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
const _getExampleDom = (elmTitle, elmContent, elmSnippet) => {
    return (
        <Panel header={elmTitle} footer={elmSnippet}>
            {elmContent}
        </Panel>
//        <div className="example-section">
//            <div className="example-section-title">{elmTitle}</div>
//            <div className="example-section-content">
//                {elmContent}
//            </div>
//        </div>
    );
}

const _pushExampleDom = (elmTitle, elmContent, elmSnippet) => {
    exampleDoms.push(
        _getExampleDom(
            elmTitle,
            elmContent,
            elmSnippet
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


const __getMenuItems = () => {
    return [
        <MenuItem eventKey="1" key="1">item 1</MenuItem>,
        <MenuItem eventKey="2" key="2">item 2</MenuItem>,
        <MenuItem divider key="0" />,
        <MenuItem eventKey="3" key="3">item 3</MenuItem>
    ];
}


// example start here
_pushExampleDom(
    '<Button /> Sizes',
    (
        <table>
            <tbody>
            <tr>
                <td className="some-padding"></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">primary</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">success</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">info</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">warning</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">danger</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">link</span></td>
            </tr>
            <tr>
                <td className="some-padding"><span className="flag-key">bsSize</span><span className="flag-value">large</span></td>
                <td className="some-padding"><Button bsStyle="primary" bsSize="large">primary</Button></td>
                <td className="some-padding"><Button bsStyle="success" bsSize="large">success</Button></td>
                <td className="some-padding"><Button bsStyle="info" bsSize="large">info</Button></td>
                <td className="some-padding"><Button bsStyle="warning" bsSize="large">warning</Button></td>
                <td className="some-padding"><Button bsStyle="danger" bsSize="large">danger</Button></td>
                <td className="some-padding"><Button bsStyle="link" bsSize="large">link</Button></td>
            </tr>
            <tr>
                <td className="some-padding"><span className="flag-key">bsSize</span><span className="flag-value">DEFAULT</span></td>
                <td className="some-padding"><Button bsStyle="primary">primary</Button></td>
                <td className="some-padding"><Button bsStyle="success">success</Button></td>
                <td className="some-padding"><Button bsStyle="info">info</Button></td>
                <td className="some-padding"><Button bsStyle="warning">warning</Button></td>
                <td className="some-padding"><Button bsStyle="danger">danger</Button></td>
                <td className="some-padding"><Button bsStyle="link">link</Button></td>
            </tr>
            <tr>
                <td className="some-padding"><span className="flag-key">bsSize</span><span className="flag-value">small</span></td>
                <td className="some-padding"><Button bsStyle="primary" bsSize="small">primary</Button></td>
                <td className="some-padding"><Button bsStyle="success" bsSize="small">success</Button></td>
                <td className="some-padding"><Button bsStyle="info" bsSize="small">info</Button></td>
                <td className="some-padding"><Button bsStyle="warning" bsSize="small">warning</Button></td>
                <td className="some-padding"><Button bsStyle="danger" bsSize="small">danger</Button></td>
                <td className="some-padding"><Button bsStyle="link" bsSize="small">link</Button></td>
            </tr>
            <tr>
                <td className="some-padding"><span className="flag-key">bsSize</span><span className="flag-value">xsmall</span></td>
                <td className="some-padding"><Button bsStyle="primary" bsSize="xsmall">primary</Button></td>
                <td className="some-padding"><Button bsStyle="success" bsSize="xsmall">success</Button></td>
                <td className="some-padding"><Button bsStyle="info" bsSize="xsmall">info</Button></td>
                <td className="some-padding"><Button bsStyle="warning" bsSize="xsmall">warning</Button></td>
                <td className="some-padding"><Button bsStyle="danger" bsSize="xsmall">danger</Button></td>
                <td className="some-padding"><Button bsStyle="link" bsSize="xsmall">link</Button></td>
            </tr>
            </tbody>
        </table>
    ),
    '<Button bsStyle="..." bsSize="...">Button Text</Button>'
)



_pushExampleDom(
    '<Button /> States',
    (
        <table>
            <tbody>
            <tr>
                <td className="some-padding"></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">primary</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">success</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">info</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">warning</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">danger</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">link</span></td>
            </tr>
            <tr>
                <td className="some-padding"><span className="flag-key">DEFAULT</span></td>
                <td className="some-padding"><Button bsStyle="primary" bsSize="large">primary</Button></td>
                <td className="some-padding"><Button bsStyle="success" bsSize="large">success</Button></td>
                <td className="some-padding"><Button bsStyle="info" bsSize="large">info</Button></td>
                <td className="some-padding"><Button bsStyle="warning" bsSize="large">warning</Button></td>
                <td className="some-padding"><Button bsStyle="danger" bsSize="large">danger</Button></td>
                <td className="some-padding"><Button bsStyle="link" bsSize="large">link</Button></td>
            </tr>
            <tr>
                <td className="some-padding"><span className="flag-key">active</span></td>
                <td className="some-padding"><Button bsStyle="primary" active>primary</Button></td>
                <td className="some-padding"><Button bsStyle="success" active>success</Button></td>
                <td className="some-padding"><Button bsStyle="info" active>info</Button></td>
                <td className="some-padding"><Button bsStyle="warning" active>warning</Button></td>
                <td className="some-padding"><Button bsStyle="danger" active>danger</Button></td>
                <td className="some-padding"><Button bsStyle="link" active>link</Button></td>
            </tr>
            <tr>
                <td className="some-padding"><span className="flag-key">disabled</span></td>
                <td className="some-padding"><Button bsStyle="primary" bsSize="small" disabled>primary</Button></td>
                <td className="some-padding"><Button bsStyle="success" bsSize="small" disabled>success</Button></td>
                <td className="some-padding"><Button bsStyle="info" bsSize="small" disabled>info</Button></td>
                <td className="some-padding"><Button bsStyle="warning" bsSize="small" disabled>warning</Button></td>
                <td className="some-padding"><Button bsStyle="danger" bsSize="small" disabled>danger</Button></td>
                <td className="some-padding"><Button bsStyle="link" bsSize="small" disabled>link</Button></td>
            </tr>
            </tbody>
        </table>
    ),
    '<Button [active|disabled]>Button Text</Button>'
)



_pushExampleDom(
    '<DropdownButton />, <SplitButton />',
    (
        <table>
            <tbody>
            <tr>
                <td className="some-padding"></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">primary</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">success</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">info</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">warning</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">danger</span></td>
                <td className="some-padding"><span className="flag-key">bsStyle</span><span className="flag-value">link</span></td>
            </tr>
            <tr>
                <td className="some-padding"><span className="flag-key">SplitButton</span></td>
                <td className="some-padding">
                    <SplitButton bsStyle="primary" title="primary" id="dropdown-exp1-primary">
                        { __getMenuItems() }
                    </SplitButton>
                </td>
                <td className="some-padding">
                    <SplitButton bsStyle="success" title="success" id="dropdown-exp1-success">
                        { __getMenuItems() }
                    </SplitButton>
                </td>
                <td className="some-padding">
                    <SplitButton bsStyle="info" title="info" id="dropdown-exp1-info">
                        { __getMenuItems() }
                    </SplitButton>
                </td>
                <td className="some-padding">
                    <SplitButton bsStyle="warning" title="warning" id="dropdown-exp1-warning">
                        { __getMenuItems() }
                    </SplitButton>
                </td>
                <td className="some-padding">
                    <SplitButton bsStyle="danger" title="danger" id="dropdown-exp1-danger">
                        { __getMenuItems() }
                    </SplitButton>
                </td>
                <td className="some-padding">
                    <SplitButton bsStyle="link" title="link" id="dropdown-exp1-link">
                        { __getMenuItems() }
                    </SplitButton>
                </td>
            </tr>

            <tr>
                <td className="some-padding"><span className="flag-key">DropdownButton</span></td>
                <td className="some-padding">
                    <DropdownButton bsStyle="primary" title="primary" id="dropdown-exp2-primary">
                        { __getMenuItems() }
                    </DropdownButton>
                </td>
                <td className="some-padding">
                    <DropdownButton bsStyle="success" title="success" id="dropdown-exp2-success">
                        { __getMenuItems() }
                    </DropdownButton>
                </td>
                <td className="some-padding">
                    <DropdownButton bsStyle="info" title="info" id="dropdown-exp2-info">
                        { __getMenuItems() }
                    </DropdownButton>
                </td>
                <td className="some-padding">
                    <DropdownButton bsStyle="warning" title="warning" id="dropdown-exp2-warning">
                        { __getMenuItems() }
                    </DropdownButton>
                </td>
                <td className="some-padding">
                    <DropdownButton bsStyle="danger" title="danger" id="dropdown-exp2-danger">
                        { __getMenuItems() }
                    </DropdownButton>
                </td>
                <td className="some-padding">
                    <DropdownButton bsStyle="link" title="link" id="dropdown-exp2-link">
                        { __getMenuItems() }
                    </DropdownButton>
                </td>
            </tr>
            </tbody>
        </table>
    ),
    '<SplitButton bsStyle="..."  title="..." id="required">'
)




_pushExampleDom(
    '<ListGroup /> Sizes',
    (
        <div>
            <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
            </ListGroup>


            <div>active, DEFAULT, disabled</div>
            <ListGroup>
                <ListGroupItem>DEFAULT</ListGroupItem>
                <ListGroupItem active>active</ListGroupItem>
                <ListGroupItem disabled>disabled</ListGroupItem>
            </ListGroup>


            <div>bsStyle</div>
            <ListGroup>
                <ListGroupItem>DEFAULT</ListGroupItem>
                <ListGroupItem bsStyle="success">success</ListGroupItem>
                <ListGroupItem bsStyle="info">info</ListGroupItem>
                <ListGroupItem bsStyle="warning">warning</ListGroupItem>
                <ListGroupItem bsStyle="danger">danger</ListGroupItem>
            </ListGroup>
        </div>
    ),
    '<ListGroup><ListGroupItem>item 111</ListGroupItem></ListGroup>'
)

//render
ReactDom.render(
    <div>
        { _getExampleDomList() }
    </div>,
    mountNode
);
