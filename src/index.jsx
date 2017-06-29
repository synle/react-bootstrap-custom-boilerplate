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
    '<ButtonToolbar /> and <Button bsStyle />',
    (
        <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle="primary">primary</Button>
            <Button bsStyle="success">success</Button>
            <Button bsStyle="info">info</Button>
            <Button bsStyle="warning">warning</Button>
            <Button bsStyle="danger">danger</Button>
            <Button bsStyle="link">link</Button>
        </ButtonToolbar>
    )
)






//render
ReactDom.render(
    <div>
        { _getExampleDomList() }
    </div>,
    mountNode
);
