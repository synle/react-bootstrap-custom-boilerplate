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
};

const _pushExampleDom = (elmTitle, elmContent, elmSnippet) => {
    exampleDoms.push(
        _getExampleDom(
            elmTitle,
            elmContent,
            elmSnippet
        )
    );
};

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
};


// example start here
_pushExampleDom(
    'Button',
    (
        <div>
            <h3>Button Sizes</h3>
            <table>
                <tbody>
                <tr>
                    <td className="some-padding"></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">primary</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">success</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">info</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">warning</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">danger</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">link</span></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>bsSize</Badge><span className="flag-value">large</span></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="large">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="large">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="large">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="large">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="large">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="large">link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>bsSize</Badge><span className="flag-value">DEFAULT</span></td>
                    <td className="some-padding"><Button bsStyle="primary">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link">link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>bsSize</Badge><span className="flag-value">small</span></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="small">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="small">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="small">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="small">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="small">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="small">link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>bsSize</Badge><span className="flag-value">xsmall</span></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="xsmall">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="xsmall">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="xsmall">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="xsmall">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="xsmall">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="xsmall">link</Button></td>
                </tr>
                </tbody>
            </table>

            <h3>Button States</h3>
            <table>
                <tbody>
                <tr>
                    <td className="some-padding"></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">primary</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">success</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">info</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">warning</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">danger</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">link</span></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>DEFAULT</Badge></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="large">primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="large">success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="large">info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="large">warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="large">danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="large">link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>active</Badge></td>
                    <td className="some-padding"><Button bsStyle="primary" active>primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" active>success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" active>info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" active>warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" active>danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" active>link</Button></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>disabled</Badge></td>
                    <td className="some-padding"><Button bsStyle="primary" bsSize="small" disabled>primary</Button></td>
                    <td className="some-padding"><Button bsStyle="success" bsSize="small" disabled>success</Button></td>
                    <td className="some-padding"><Button bsStyle="info" bsSize="small" disabled>info</Button></td>
                    <td className="some-padding"><Button bsStyle="warning" bsSize="small" disabled>warning</Button></td>
                    <td className="some-padding"><Button bsStyle="danger" bsSize="small" disabled>danger</Button></td>
                    <td className="some-padding"><Button bsStyle="link" bsSize="small" disabled>link</Button></td>
                </tr>
                </tbody>
            </table>
        </div>
    ),
    '<Button bsStyle="..." bsSize="..." [active|disabled]>Button Text</Button>'
)


_pushExampleDom(
    'DropdownButton and SplitButton',
    (
        <div>
            <table>
                <tbody>
                <tr>
                    <td className="some-padding"></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">primary</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">success</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">info</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">warning</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">danger</span></td>
                    <td className="some-padding"><Badge>bsStyle</Badge><span className="flag-value">link</span></td>
                </tr>
                <tr>
                    <td className="some-padding"><Badge>SplitButton</Badge></td>
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
                    <td className="some-padding"><Badge>DropdownButton</Badge></td>
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
        </div>
    ),
    '<SplitButton bsStyle="..."  title="required" id="required">'
);




_pushExampleDom(
    'ListGroup',
    (
        <div>
            <table>
                <tbody>
                <tr>
                    <td className="some-padding">
                        <Badge>active</Badge>, <Badge>disabled</Badge>
                    </td>
                    <td className="some-padding">
                        <Badge>bsStyle</Badge>
                    </td>
                </tr>
                <tr>
                    <td className="some-padding">
                        <ListGroup>
                            <ListGroupItem>DEFAULT</ListGroupItem>
                            <ListGroupItem active>active</ListGroupItem>
                            <ListGroupItem disabled>disabled</ListGroupItem>
                        </ListGroup>
                    </td>
                    <td className="some-padding">
                        <ListGroup>
                            <ListGroupItem>DEFAULT</ListGroupItem>
                            <ListGroupItem bsStyle="success">success</ListGroupItem>
                            <ListGroupItem bsStyle="info">info</ListGroupItem>
                            <ListGroupItem bsStyle="warning">warning</ListGroupItem>
                            <ListGroupItem bsStyle="danger">danger</ListGroupItem>
                        </ListGroup>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    ),
    '<ListGroup>    <ListGroupItem bsStyle="..." [active|disabled]>item 111</ListGroupItem>    </ListGroup>'
);



function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

_pushExampleDom(
    'Forms',
    (
        <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Text"
              placeholder="Enter text"
            />
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
            />
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="File"
              help="Example block-level help text here."
            />

            <Checkbox checked readOnly>
              Checkbox
            </Checkbox>
            <Radio checked readOnly>
              Radio
            </Radio>

            <FormGroup>
              <Checkbox inline>
                1
              </Checkbox>
              {' '}
              <Checkbox inline>
                2
              </Checkbox>
              {' '}
              <Checkbox inline>
                3
              </Checkbox>
            </FormGroup>
            <FormGroup>
              <Radio name="radioGroup" inline>
                1
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                2
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                3
              </Radio>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelectMultiple">
              <ControlLabel>Multiple select</ControlLabel>
              <FormControl componentClass="select" multiple>
                <option value="select">select (multiple)</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Textarea</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Static text</ControlLabel>
              <FormControl.Static>
                email@example.com
              </FormControl.Static>
            </FormGroup>

            <Button type="submit">
              Submit
            </Button>
          </form>
    )
    '<Form>  <FormGroup controlId={id}>Label</FormGroup></Form>'
);

//render
ReactDom.render(
    <div>
        { _getExampleDomList() }
    </div>,
    mountNode
);
